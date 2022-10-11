exports.config = {

    port: 4723,
    specs: [
        './tests/android-login.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        "platformName": 'Android',
        "appium:deviceName": "Pixel 3",
        "appium:automationName": "UiAutomator2"
    }],

    logLevel: 'info',
    logLevels: {
        webdriver: 'info',
        webdriverio: 'info',
        '@wdio/local-runner': 'info',
        '@wdio/appium-service': 'info'
    },

    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
