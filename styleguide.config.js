const path = require('path');

module.exports = {
    skipComponentsWithoutExample: true,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/Provider.js')
    }
};