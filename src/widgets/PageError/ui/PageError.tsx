import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export function PageError(props: PageErrorProps) {
    const { className } = props;

    const { t } = useTranslation();

    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={cls.title}>{t('Возникла непредвиденная ошибка')}</div>
            <Button theme={ButtonTheme.OUTLINE} onClick={onReload}>{t('Обновить страницу')}</Button>
        </div>
    );
}
