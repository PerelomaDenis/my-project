import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export function CommentList(props: CommentListProps) {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation('article-details');

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
}
