import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

const data = {
    username: 'admin',
    age: 29,
    country: Country.Russia,
    lastname: 'Pereloma',
    first: 'Denis',
    city: 'Taganrog',
    currency: Currency.RUB,
    id: '1',
};

describe('updateProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        // @ts-ignore
        const result = await thunk.callThunk();

        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockRejectedValue(Promise.resolve({ status: 403 }));

        // @ts-ignore
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, first: '' },
            },
        });

        // @ts-ignore
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
});
