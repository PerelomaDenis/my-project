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
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListItem) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            },
        );
        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name: StateSchemaKeys) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
