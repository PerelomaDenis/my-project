import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: NavbarProps) {
    const { className } = props;

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpen} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Логин')}
            </Button>
            <LoginModal onClose={onClose} isOpen={isOpen} />
        </div>
    );
}
