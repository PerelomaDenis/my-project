import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

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
};

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        mockedAxios.get.mockRejectedValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(fetchProfileData);
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
