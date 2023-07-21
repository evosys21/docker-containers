require('dotenv').config();
const fs = require('fs');
const {spawnSync} = require('child_process');
const _ = require("lodash");
const sprintf = require('sprintf-js').sprintf;

const process = require('process');
process.chdir(__dirname + './../');

console.log(process.cwd());
// process.exit()

const buildConfig = require("./../build-config");

const push = process.argv.includes('--push');
const debug = process.argv.includes('--debug');
const dry = process.argv.includes('--dry');

function execute(commandString) {
    if (dry) return console.log(commandString);
    const [command, ...args] = commandString.split(' ');
    return spawnSync(command, args, {stdio: 'inherit'});
}

function createTempDockerfile(template, repo, tag = 'latest', search = "", replace = "") {
    const tempFile = `Dockerfile_${tag}`;

    const content = fs.readFileSync(template, 'utf-8');
    const updatedContent = _.replace(content, search, replace);

    fs.writeFileSync(tempFile, updatedContent);

    return tempFile;
}

function build(repo, tag) {
    let config = _.get(buildConfig, [repo, tag], {});
    while (_.has(config, ['extends'])) {
        const ext = config['extends']
        delete config['extends']
        const parent = _.get(buildConfig, [repo, ext], {});
        config = _.merge(parent, config);
    }
    const template = _.get(config, ['Dockerfile'], `${repo}/${tag}/Dockerfile`)
    const search = _.get(config, ['search'], tag)
    const replace = _.get(config, ['replace'], tag)
    const tempDockerfile = createTempDockerfile(template, repo, tag, search, replace);
    console.log(sprintf("Building: template:%s repo: %s tag:%s search:%s replace:%s", template, repo, tag, search, replace));
    execute(`docker build -f ${tempDockerfile} . -t ${repo}:${tag}`);
    if (!debug) {
        fs.unlinkSync(tempDockerfile);
    }
}

function dockerPush(repo, tag) {
    const dest = `${dockerHub}/${repo}:${tag}`;

    execute(`docker image tag ${repo}:${tag} ${dest}`);
    execute(`docker push ${dest}`);
}

const dockerHub = process.env.DOCKER_HUB || '';

_.forEach(buildConfig, (config, repo) => {
    _.forEach(config, (config, tag) => {
        if (config.skip) return;
        build(repo, tag);
        if (push) {
            dockerPush(repo, tag);
        }

    });
});
