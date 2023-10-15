import { BuildOptions } from './types/config';
import { ResolveOptions } from 'webpack';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    const { paths } = options;

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}