export const buildSVGLoader = () => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
});
