import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:5]',
                    auto: (path: string) => path.includes('.module.'),
                },
            },
        },
        'sass-loader',
    ],
});
