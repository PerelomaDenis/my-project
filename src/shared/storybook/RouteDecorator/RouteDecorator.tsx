import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export function RouteDecorator(Story: StoryFn) {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
}
