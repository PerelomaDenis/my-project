import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
