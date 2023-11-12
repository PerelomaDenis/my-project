import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { profileActions } from 'entities/Profile/model/slices/profileSlice';
// eslint-disable-next-line max-len
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export function ProfilePageHeader(props: ProfilePageHeaderProps) {
    const { className } = props;

    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit &&
                (readonly ? (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <div className={cls.actions}>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancel}
                        >
                            {t('Отмена')}
                        </Button>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                    </div>
                ))}
        </div>
    );
}
