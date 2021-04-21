const path = require("path");

module.exports = async ({ config, mode }) => {
    //add addon-storysource
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
    });
    // allow SCSS
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src")
    });
    // setup URL Alias
    config.resolve.alias = {
        ...config.resolve.alias,
        "Src": path.resolve(__dirname, "../src")
    };
    return config;
};