let allure = require('allure-commandline');

function gen_allure_report(dir_with_results_for_report_gen)
{
    let generation = allure(['generate', `./${dir_with_results_for_report_gen}`, `--clean`]);

    generation.on('exit', function (exitCode)
    {
        console.log('Generation is finished with code:', exitCode);
    });
}

module.exports = {
    gen_allure_report: gen_allure_report
};
