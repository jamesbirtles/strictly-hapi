module.exports = wallaby => ({
    testFramework: 'ava',
    files: [
        'src/**/*.ts',
        '!src/**/*.spec.ts',
    ],
    tests: [
        'src/**/*.spec.ts'
    ],
    env: {
        type: 'node',
        runner: 'node'
    }
});