import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from 'pages/ArticleDetailPage/model/slice/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from 'pages/ArticleDetailPage/model/selectors/comments';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
};

function ArticleDetailPage(props: ArticleDetailPageProps) {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();

    const { articleId } = useParams<{ articleId: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const error = useSelector(getArticleCommentsError);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    if (!articleId) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetails articleId={articleId} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
}

export default ArticleDetailPage;
