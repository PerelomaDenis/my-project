import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'password',
            },
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'password',
                error: 'error',
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username',
                password: 'password',
                isLoading: true,
            },
        }),
    ],
};
