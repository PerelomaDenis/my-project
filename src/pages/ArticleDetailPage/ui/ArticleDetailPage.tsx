import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

function ArticleDetailPage(props: ArticleDetailPageProps) {
    const { className } = props;

    const { articleId } = useParams<{ articleId: string }>();

    if (!articleId) {
        return null;
    }

    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails articleId={articleId} />
        </div>
    );
}

export default ArticleDetailPage;
