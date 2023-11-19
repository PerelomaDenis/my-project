import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
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
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from 'pages/ArticleDetailPage/model/selectors/comments';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
// eslint-disable-next-line max-len
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
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
    const navigate = useNavigate();

    const { articleId } = useParams<{ articleId: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const error = useSelector(getArticleCommentsError);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );
    const onBackToList = useCallback(() => {
        navigate(routePaths.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    if (!articleId) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails articleId={articleId} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
}

export default ArticleDetailPage;
