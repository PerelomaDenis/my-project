import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/AboutPage',
    component: ArticlesPage,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
