import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import { Card } from 'shared/ui/Card/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export function ArticleListItemSkeleton(props: ArticleListItemSkeletonProps) {
    const { className, view = ArticleView.BIG } = props;

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.username}
                        />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton height={24} width={250} className={cls.title} />
                    <Skeleton height={200} width="100%" className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
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
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} width={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton height={16} width={130} />
                </div>
                <Skeleton height={16} width={150} className={cls.title} />
            </Card>
        </div>
    );
}
