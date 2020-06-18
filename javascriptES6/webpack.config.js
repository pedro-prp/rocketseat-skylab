module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            }
        ],
    },
}