import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import ArticleDetailPage from './ArticleDetailPage';

const meta = {
    title: 'pages/AboutPage',
    component: ArticleDetailPage,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
