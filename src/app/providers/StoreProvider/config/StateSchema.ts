import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export type ReducersListItem = [StateSchemaKeys, Reducer];

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
