module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'bundle.js'
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