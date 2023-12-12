import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/ui/Tabs';
import { useCallback, useMemo } from 'react';
import { ArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onTabClick: (type: ArticleType) => void;
}

export function ArticleTypeTabs(props: ArticleTypeTabsProps) {
    const { className, onTabClick, value } = props;

    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );

    const onChangeType = useCallback(
        (tab: TabItem) => {
            onTabClick(tab.value as ArticleType);
        },
        [onTabClick],
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
}
