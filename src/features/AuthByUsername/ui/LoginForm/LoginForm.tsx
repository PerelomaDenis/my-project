import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export function LoginForm(props: LoginFormProps) {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder="Введите username" />
            <Input placeholder="Введите пароль" />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginButton}>
                {t('Войти')}
            </Button>
        </div>
    );
}
