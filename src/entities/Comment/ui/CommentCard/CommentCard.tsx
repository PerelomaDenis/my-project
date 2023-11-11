import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export function CommentCard(props: CommentCardProps) {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
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

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && (
                    <Avatar src={comment.user.avatar} size={30} />
                )}
                <Text className={cls.username} text={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
}
