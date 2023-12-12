import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { SortOrder } from 'shared/types/types';
import { ArticleSortField } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const inited = getArticlesPageInited(thunkAPI.getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');

        if (orderFromUrl) {
            thunkAPI.dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            thunkAPI.dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            thunkAPI.dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        thunkAPI.dispatch(articlesPageActions.initState());
        thunkAPI.dispatch(fetchArticlesList({}));
    }
});
