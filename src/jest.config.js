module.exports = {
    testEnvironment: 'node',
    testMatch: ['/_test_//js?(x)','/?(.)+(spec|test).js?(x)'],
    collectCoverage: true,
    collectCoverageFrom: ['/*.js'],
    coverageReporters: ['text-summary'],
}