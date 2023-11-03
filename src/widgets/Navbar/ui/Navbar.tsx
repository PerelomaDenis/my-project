import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: NavbarProps) {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const userData = useSelector(getUserAuthData);

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (userData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpen} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Войти')}
            </Button>
            {isOpen && <LoginModal onClose={onClose} isOpen={isOpen} />}
        </div>
    );
}
