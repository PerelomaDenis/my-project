import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/ui/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import {
    ArticleBlockType,
    ArticleTextBlock,
} from 'entities/Article/model/types/article';
import { ArticleBlockText } from 'entities/Article/ui/ArticleBlockText/ArticleBlockText';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export function ArticleListItem(props: ArticleListItemProps) {
    const { className, view, article } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(routePaths.article_details + article.id);
    }, [article, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    <Text
                        text={article.type.join(', ')}
                        className={cls.types}
                    />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleBlockText
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее...')}
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text
                        text={article.type.join(', ')}
                        className={cls.types}
                    />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
}
