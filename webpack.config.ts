import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    context: path.join(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'css'],
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        open: true,
        port: 8086,
    },
};

export default config;