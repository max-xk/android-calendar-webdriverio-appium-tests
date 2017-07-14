let request = require('request');
const fse = require('fs-extra');

const host = '127.0.0.1';
const port = 4730;

const output_dir_with_results_for_report_gen = 'allure-results';
exports.output_dir_with_results_for_report_gen = output_dir_with_results_for_report_gen;

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    specs: [
        './features/E1_event_creation_update_delete.feature',
    ],

    reporters: ['dot', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: output_dir_with_results_for_report_gen
        }
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.6.5',
            browserName: "",
            platformName: 'Android',
            appPackage: 'com.android.calendar',
            appActivity: 'com.android.calendar.AllInOneActivity',
            platformVersion: '4.4.2',
            deviceName: 'THL500',
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium.cmd',
        logFileName: 'appium165.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    //name of package is generated like wdio-<framework_name>-framework in source code of wdio runner
    framework: 'cucumber2',
    cucumberOpts: {
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        require: [
            './features/step_definitions/cal_steps.js',
            './features/support/world_cal.js',
        ],
    },

    /**
     * hooks
     */
    onPrepare: function ()
    {
        //Clean up files used for previous report generation
        fse.remove(`./${output_dir_with_results_for_report_gen}`)
            .then(() =>
            {
                console.log('Previous results for report generation have been deleted.');
            })
            .catch(err =>
            {
                console.error(err);
            });

        // Fixing appium server is still running after tests are finished.
        // After making get request the server is exited fine (and it is no need to kill process by PID).
        // If adding fix to "onComplete" hook: request to appium server has no effect. If adding fix to "afterSession" or "after" hook: request does not close appium server.
        // More details about the issue can be found at the end of discussion here: https://github.com/rhysd/wdio-appium-service/issues/2
        request(`http://${host}:${port}/wd/hub`, (error, response, body) =>
        {
        });

        console.log('<<< TESTING STARTED >>>');
    },

    afterCommand: function (commandName, args, result, error)
    {
        browser.screenshot();
    },

    onComplete: function ()
    {

        console.log('<<< TESTING FINISHED >>>');
    }

};