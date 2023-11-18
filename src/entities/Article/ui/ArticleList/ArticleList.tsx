import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export function ArticleList(props: ArticleListProps) {
    const { className, articles, view = ArticleView.SMALL, isLoading } = props;

    const renderArticles = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticles) : null}
            {isLoading && (
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    {new Array(view === ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((item, index) => (
                            <ArticleListItemSkeleton view={view} key={index} />
                        ))}
                </div>
            )}
        </div>
    );
}
