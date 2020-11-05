const path = require('path');

module.exports = {
    components: '../../src/components/**/*.js',
    skipComponentsWithoutExample: true,
    styleguideComponents: {
        Wrapper: path.join(__dirname, '../../src/utils/Provider.js')
    },
    webpackConfig: require('../webpack.config.js')
};