import { useTranslation } from 'react-i18next';

function ArticlesPage() {
    const { t } = useTranslation('articles');
    return <div>{t('Статьи')}</div>;
}

export default ArticlesPage;
