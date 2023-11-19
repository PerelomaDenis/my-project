import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
    ReducersListItem,
    ReduxStoreWithManager,
    StateSchemaKeys,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [key in StateSchemaKeys]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, removeAfterUnmount, reducers } = props;

    const dispatch = useDispatch();

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKeys];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKeys, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
