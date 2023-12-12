import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleSortField,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import React, { useCallback, useMemo } from 'react';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/ui/Card';
import { Input } from 'shared/ui/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types/types';
import { useDebounce } from 'shared/hooks/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/ui/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export function ArticlesPageFilters(props: ArticlesPageFiltersProps) {
    const { className } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onTabClick={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
}
