import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        isOpen: true,
        children:
            'ssssssssss sssssssssssss ssssssssssssss ssssssss ssssssssss\n' +
            '                sssssssssssss ssssssssssssss ssssssss ssssssssss sssssssssssss\n' +
            '                ssssssssssssss ssssssss ssssssssss sssssssssssss ssssssssssssss\n' +
            '                ssssssss ssssssssss sssssssssssss ssssssssssssss ssssssss\n' +
            '                ssssssssss sssssssssssss ssssssssssssss ssssssss',
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
