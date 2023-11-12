import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

function ArticlesPage(props: ArticlesPageProps) {
    const { className } = props;
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList articles={[]} />
        </div>
    );
}

export default ArticlesPage;
