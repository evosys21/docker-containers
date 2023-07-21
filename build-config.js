module.exports = {
    php: {
        '7.1': {
            Dockerfile: 'php/7.1/Dockerfile',
        },
        '7.2': {
            extends: '7.1',
            search: /7.1/g,
        },
        '7.3': {
            extends: '7.1',
            search: /7.1/g,
        },
        '7.4': {},
        '8.0': {
            Dockerfile: 'php/8.0/Dockerfile',
        },
        '8.1': {
            extends: '8.0',
            search: /8.0/g,
        },
        '8.2': {
            extends: '8.0',
            search: /8.0/g,
        }
    }
}
