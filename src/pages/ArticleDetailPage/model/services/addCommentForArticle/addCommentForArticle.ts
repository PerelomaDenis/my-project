import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
    try {
        const userData = getUserAuthData(thunkAPI.getState());
        const article = getArticleDetailsData(thunkAPI.getState());

        if (!userData || !text || !article) {
            return thunkAPI.rejectWithValue('no data');
        }

        const response = await thunkAPI.extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
