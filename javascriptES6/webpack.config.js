module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: __dirname,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
}