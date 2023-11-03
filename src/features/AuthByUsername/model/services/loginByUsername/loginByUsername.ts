import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (loginData, thunkAPI) => {
    try {
        const response = await axios.post(
            'http://localhost:8000/login',
            loginData,
        );

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
