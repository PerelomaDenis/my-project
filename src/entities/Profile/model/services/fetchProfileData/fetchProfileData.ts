import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get('/profile');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
