import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    test('return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
