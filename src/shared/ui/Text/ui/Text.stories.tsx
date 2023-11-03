import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleLight: Story = {
    args: {
        title: 'Title',
    },
};

export const TitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextLight: Story = {
    args: {
        text: 'Text',
    },
};

export const TextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextAndTitle: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
};

export const TextAndTitleDark: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        theme: TextTheme.ERROR,
    },
};
