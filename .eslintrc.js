module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
