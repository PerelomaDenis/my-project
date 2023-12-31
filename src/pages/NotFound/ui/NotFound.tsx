import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export function NotFound(props: NotFoundProps) {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
}
