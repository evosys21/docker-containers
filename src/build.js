const fs = require('fs');
const path = require('path');
const process = require("process");

// Get the directory path from the command line arguments
const dirPath = process.argv[2]; // Replace with your directory path

const push = process.argv.includes('--push');
const debug = process.argv.includes('--debug');
const dry = process.argv.includes('--dry');
const dir = process.argv.includes('--dir');

const getDirectories = sourcePath =>
    fs.readdirSync(sourcePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => path.join(sourcePath, dirent.name));

const directories = getDirectories(dirPath);

console.log(directories);
