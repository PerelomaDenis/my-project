import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm, Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    try {
        const formData = getProfileForm(thunkAPI.getState());
        const response = await thunkAPI.extra.api.put(
            `/profile/${formData?.id}`,
            formData,
        );

        const errors = validateProfileData(formData);

        if (errors.length > 0) {
            return thunkAPI.rejectWithValue(errors);
        }

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
