import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options;

    const svgLoader = buildSVGLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    return [
        tsLoader,
        cssLoader,
        fileLoader,
        svgLoader,
    ];
};
