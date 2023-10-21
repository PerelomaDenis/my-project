import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { RouteDecorator } from 'shared/storybook/RouteDecorator/RouteDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouteDecorator,
    ],
};

export default preview;
