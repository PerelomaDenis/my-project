import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'widgets/Page';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Counter />
            {t('Главная')}
        </Page>
    );
}

export default MainPage;
