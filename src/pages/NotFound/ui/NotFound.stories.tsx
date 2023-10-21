import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { NotFound } from './NotFound';

const meta = {
    title: 'pages/NotFound',
    component: NotFound,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {
    },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
