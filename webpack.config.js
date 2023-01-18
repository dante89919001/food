

const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'js/script.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    watch: true,

    devtool: "source-map",
  
    module: {}
}
