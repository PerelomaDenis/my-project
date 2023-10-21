import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
