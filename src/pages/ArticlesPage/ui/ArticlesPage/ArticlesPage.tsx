import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articlesPageReducer,
    getArticles,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useCallback } from 'react';
import { Page } from 'widgets/Page';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
// eslint-disable-next-line max-len
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
// eslint-disable-next-line max-len
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
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
    const [searchParams] = useSearchParams();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={false}
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    className={cls.list}
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );
}

export default ArticlesPage;
