import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <Counter />
            {t('Главная')}
        </div>
    );
}

export default MainPage;
