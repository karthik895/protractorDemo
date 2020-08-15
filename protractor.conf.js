const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: { args: ['start-maximized'] }
    },
    specs: ['src/demo.spec.ts'], //Name of the Specfile

    onPrepare() {
        //global test set-up goes here 
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 7000,
        print: function () { }
    }
}