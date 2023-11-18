import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page';
// eslint-disable-next-line max-len
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

function ArticlesPage(props: ArticlesPageProps) {
    const { className } = props;

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(
            fetchArticlesList({
                page: 1,
            }),
        );
    });

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );
}

export default ArticlesPage;
