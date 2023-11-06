import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });

    test('return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
