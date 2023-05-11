const allure = require('allure-commandline');
exports.config = {
    runner: 'local',
    specs: [
        './test/*.spec.js'
    ],
    suites: {
        experienceBookingFlow: [
            './test/experienceBookingFlow.spec.js'
        ],
        introductionActivityBox: [
            './test/introductionActivityBox.spec.js'
        ],
        newsletterSubscription: [
            './test/newsletterSubscription.spec.js'
        ],
        experienceDetailsPage: [
            './test/experienceDetailsPage.spec.js'
        ],
        bookmarks: [
            './test/bookmarks.spec.js'
        ],
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--whitelisted-ips=',
                '--disable-infobars=true', // note this does not remove "Chrome is being controlled by automated test software" notification
                '--disable-gpu',
                'window-size=1920,1080',
                'test-type=browser',
                'disable-notifications',
                'disable-application-cache',
                '-disable-extensions', // used to bypass loading of extensions which will be blocked by MMC security policy anyway
                '--ignore-certificate-errors',
                'enable-automation',
                '--disable-dev-shm-usage',
                '--disable-browser-side-navigation',
                '--no-sandbox',
                '--enable-logging'
            ],
        }
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: 
        ['spec',
        ['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        retries: 2
    },

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },

    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },

    /**
     * Gets executed just after a worker process has exited.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {Number} exitCode 0 - success, 1 - fail
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {Number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },

    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: async function (capabilities, specs) {
    // },

    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },

    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: async function (test, context) {
        await browser.url(`https://www.norwegian.travel/`);
        await browser.setCookies(
            {
                domain: 'www.norwegian.travel',
                expiry: 1714228775,
                httpOnly: true,
                name: 'cookie-consent',
                path: '/',
                sameSite: 'Lax',
                secure: false,
                value: 'ca6ae908470ff852326d89f310d6016778c0ba70c1923b7572f0ab1cba9fa466a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22cookie-consent%22%3Bi%3A1%3Bs%3A126%3A%22%7B%22consent_uid%22%3A%220d13ca2a-7942-4acd-a9db-3a43c0f65f1a%22%2C%22ntcen-necessary%22%3Atrue%2C%22ntcen-statistics%22%3Afalse%2C%22ntcen-marketing%22%3Afalse%7D%22%3B%7D'
                }
        );
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: async function (test, context) {
    //     await browser.url(`https://www.norwegian.travel/`);
    //     await browser.setCookies(
    //         {
    //             domain: 'www.norwegian.travel',
    //             expiry: 1714228775,
    //             httpOnly: true,
    //             name: 'cookie-consent',
    //             path: '/',
    //             sameSite: 'Lax',
    //             secure: false,
    //             value: 'ca6ae908470ff852326d89f310d6016778c0ba70c1923b7572f0ab1cba9fa466a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22cookie-consent%22%3Bi%3A1%3Bs%3A126%3A%22%7B%22consent_uid%22%3A%220d13ca2a-7942-4acd-a9db-3a43c0f65f1a%22%2C%22ntcen-necessary%22%3Atrue%2C%22ntcen-statistics%22%3Afalse%2C%22ntcen-marketing%22%3Afalse%7D%22%3B%7D'
    //             }
    //     );
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }

        await browser.deleteCookies();
    },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: async function (result, capabilities, specs) {
    //     await browser.deleteCookies()
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    
     onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
}
