import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) =>
    function (Story: StoryFn) {
        return (
            <StoreProvider
                initialStore={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
    };
