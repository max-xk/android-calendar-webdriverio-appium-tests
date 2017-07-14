const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

let {setWorldConstructor, setDefaultTimeout, Before, After, registerHandler} = require('cucumber');

let {output_dir_with_results_for_report_gen} = require('../../wdio.cucumber.conf');
let {gen_allure_report} = require('../../utils/allure_report');
//let {allure} = require('allure-commandline');

let cucumberThisWorld;
function CustomWorld({attach, parameters})
{
    cucumberThisWorld = this;
    cucumberThis = this;
    this.parameters = parameters;
    this.attach = attach;

    //Prevent rewriting  this.dataStorage on each run. It is rewriten by default
    if (this.dataStorage == null)
    {
        //if there is no data during steps execution create new one
        if (afterScenarioVarForDataStorage == null)
        {
            this.dataStorage = {};
        }
        //if there is some data during steps execution add it to this.dataStorage to reuse in tests
        else
        {
            this.dataStorage = afterScenarioVarForDataStorage;
        }
    }

    request = require('request');
    moment = require('moment');
    _ = require('lodash');
    let chai = require('chai');
    expect = chai.expect;
}
setWorldConstructor(CustomWorld);
setDefaultTimeout(10 * 60000);

//storage to store this.dataStorage data to reuse between scenarios
let afterScenarioVarForDataStorage;
//store this.dataStorage data to reuse between scenarios
registerHandler('AfterScenario', function (scenario)
{
    afterScenarioVarForDataStorage = cucumberThisWorld.dataStorage;

});
//wipe storage for this.dataStorage on each new feature run to prevent unexpected conflicts
registerHandler('AfterFeature', function (scenario)
{
    afterScenarioVarForDataStorage = undefined;
});

registerHandler('AfterFeatures', function (features)
{
    //Optimize screenshots to make report more usable and save disc space
    imagemin([`${output_dir_with_results_for_report_gen}/*.png`], `${output_dir_with_results_for_report_gen}`, {
        use: [imageminPngquant(
            {quality: '30-40'}
        )]
    }).then(() =>
    {
        console.log('Screenshots optimized');
    }).then(() =>
        {
            gen_allure_report(output_dir_with_results_for_report_gen);
        }
    );

});


