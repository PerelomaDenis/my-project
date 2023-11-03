import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getLoginState, loginActions } from 'features/AuthByUsername';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export function LoginForm(props: LoginFormProps) {
    const { className } = props;

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onSubmit = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={t('Неверные логин или пароль')}
                />
            )}
            <Input
                autofocus
                value={username}
                placeholder="Введите username"
                onChange={onChangeUsername}
            />
            <Input
                value={password}
                placeholder="Введите пароль"
                onChange={onChangePassword}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginButton}
                onClick={onSubmit}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
}
