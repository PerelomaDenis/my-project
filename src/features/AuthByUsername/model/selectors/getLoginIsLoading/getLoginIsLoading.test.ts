import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
