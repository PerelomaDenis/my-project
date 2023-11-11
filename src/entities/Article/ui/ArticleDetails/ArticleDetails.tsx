import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
    ArticleBlock,
    ArticleBlockType,
} from 'entities/Article/model/types/article';
import { ArticleBlockCode } from 'entities/Article/ui/ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImage } from 'entities/Article/ui/ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockText } from 'entities/Article/ui/ArticleBlockText/ArticleBlockText';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    articleId: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export function ArticleDetails(props: ArticleDetailsProps) {
    const { className, articleId } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article-details');

    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleBlockCode className={cls.block} block={block} />;
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleBlockImage className={cls.block} block={block} />
                );
            case ArticleBlockType.TEXT:
                return <ArticleBlockText className={cls.block} block={block} />;
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    height={200}
                    width={200}
                    border="50%"
                />
                <Skeleton className={cls.title} height={32} width={300} />
                <Skeleton className={cls.skeleton} height={24} width="100%" />
                <Skeleton className={cls.skeleton} height={200} width="100%" />
                <Skeleton className={cls.skeleton} height={200} width="100%" />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('При загрузке статьи произошла ошибка')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
}
