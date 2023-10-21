import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {
    },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
