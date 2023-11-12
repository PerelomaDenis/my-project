import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'features/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state, action) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer,
} = addCommentFormSlice;
