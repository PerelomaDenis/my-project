import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { AxiosInstance } from 'axios';
// @ts-ignore
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export type ReducersListItem = [StateSchemaKeys, Reducer];

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

interface ThunkExtraArgs {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
}
