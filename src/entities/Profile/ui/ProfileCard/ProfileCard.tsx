import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
} from 'entities/Profile';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Loader } from 'shared/ui/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
    const { className } = props;

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    if (!data) {
        return <Loader />;
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Имя')} />
                <Input value={data?.lastname} placeholder={t('Фамилия')} />
            </div>
        </div>
    );
}
