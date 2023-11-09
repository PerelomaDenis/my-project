import { useTranslation } from 'react-i18next';

function ArticleDetailPage() {
    const { t } = useTranslation('articles');
    return <div>{t('Статья')}</div>;
}

export default ArticleDetailPage;
