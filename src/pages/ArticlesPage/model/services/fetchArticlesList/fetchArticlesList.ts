import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkAPI) => {
    const limit = getArticlesPageLimit(thunkAPI.getState());
    const sort = getArticlesPageSort(thunkAPI.getState());
    const order = getArticlesPageOrder(thunkAPI.getState());
    const search = getArticlesPageSearch(thunkAPI.getState());
    const page = getArticlesPageNum(thunkAPI.getState());
    const type = getArticlesPageType(thunkAPI.getState());

    try {
        addQueryParams({ sort, order, search, type });
        const response = await thunkAPI.extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
