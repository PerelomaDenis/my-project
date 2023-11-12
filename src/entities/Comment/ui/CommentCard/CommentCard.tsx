import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export function CommentCard(props: CommentCardProps) {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${routePaths.profile}${comment.user.id}`}
                className={cls.header}
            >
                {comment.user.avatar && (
                    <Avatar src={comment.user.avatar} size={30} />
                )}
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
}
