import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            user: userReducer,
            loginForm: loginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
