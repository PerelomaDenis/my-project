import { classNames } from 'shared/lib/classNames/classNames';
import { Profile } from 'entities/Profile';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    readonly?: boolean;
    error?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export function ProfileCard(props: ProfileCardProps) {
    const {
        className,
        isLoading,
        error,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (!data || isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title={t('Возникла непредвиденная ошибка')}
                    text={t('Обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div
            className={classNames(
                cls.ProfileCard,
                { [cls.editing]: !readonly },
                [className],
            )}
        >
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    onChange={onChangeFirstname}
                    placeholder={t('Имя')}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    placeholder={t('Фамилия')}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    onChange={onChangeUsername}
                    placeholder={t('Логин')}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    onChange={onChangeCity}
                    placeholder={t('Город')}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    onChange={onChangeAge}
                    placeholder={t('Возраст')}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    placeholder={t('Аватар')}
                    readonly={readonly}
                />
                <CurrencySelect
                    readonly={readonly}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    readonly={readonly}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
}
