import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { AppLink } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {
        to: '/',
        children: 'Link',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
