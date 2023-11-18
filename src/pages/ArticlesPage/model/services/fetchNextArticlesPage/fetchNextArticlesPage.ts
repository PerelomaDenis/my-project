import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
    const hasMore = getArticlesPageHasMore(thunkAPI.getState());
    const page = getArticlesPageNum(thunkAPI.getState());
    const isLoading = getArticlesPageIsLoading(thunkAPI.getState());

    if (hasMore && !isLoading) {
        thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
        thunkAPI.dispatch(fetchArticlesList({ page: page + 1 }));
    }
});
