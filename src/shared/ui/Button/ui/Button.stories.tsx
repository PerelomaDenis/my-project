import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
