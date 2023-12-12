import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { SortOrder } from 'shared/types/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export function ArticleSortSelector(props: ArticleSortSelectorProps) {
    const { className, onChangeSort, sort, onChangeOrder, order } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED_AT,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
            />
            <Select
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t('по')}
            />
        </div>
    );
}
