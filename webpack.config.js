const path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",

                include: [
                    path.resolve(__dirname, "src"),
                ],

                test: /\.js?$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            },
        ]
    },
    entry: {
        bundle: ["./src/index.js"],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets/",
        filename: "[name].js"
    },
    devServer: { inline: true, port: 5000 },
    devtool: 'source-map',
}