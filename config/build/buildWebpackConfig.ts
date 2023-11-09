import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    };
};
