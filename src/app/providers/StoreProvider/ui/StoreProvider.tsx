import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { ReactNode } from 'react';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialStore?: DeepPartial<StateSchema>;
}

export function StoreProvider(props: StoreProviderProps) {
    const { children, initialStore } = props;
    const store = createReduxStore(initialStore as StateSchema);

    return <Provider store={store}>{children}</Provider>;
}
