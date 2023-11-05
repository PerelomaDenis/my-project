import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (loginData, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post('/login', loginData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data),
        );
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
