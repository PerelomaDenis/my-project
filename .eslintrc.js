module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'i18next/no-literal-string': [
            'error',
            {
                ignoreAttribute: ['data-testid'],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 100,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
