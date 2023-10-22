import { Theme } from 'app/providers/ThemeProvider/libs/ThemeContext';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) =>
    function (Story: StoryFn) {
        return (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        );
    };
