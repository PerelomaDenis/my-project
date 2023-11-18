import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'books',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLE_VIEW_LOCAL_STORAGE_KEY,
                action.payload,
            );
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCAL_STORAGE_KEY,
            ) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
    articlesPageSlice;
