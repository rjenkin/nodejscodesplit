const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/main.ts',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    // externals: [nodeExternals()],
    optimization: {
        sideEffects: false,
        namedModules: true,
        namedChunks: true,
        splitChunks: {
            chunks: 'all'
        }
    },
};
