import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';
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
    console.log(isOpen);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpen} theme={ButtonTheme.CLEAR_INVERTED}>
                {t('Логин')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isOpen} onClose={onClose}>
                ssssssssss sssssssssssss ssssssssssssss ssssssss ssssssssss
                sssssssssssss ssssssssssssss ssssssss ssssssssss sssssssssssss
                ssssssssssssss ssssssss ssssssssss sssssssssssss ssssssssssssss
                ssssssss ssssssssss sssssssssssss ssssssssssssss ssssssss
                ssssssssss sssssssssssss ssssssssssssss ssssssss
            </Modal>
        </div>
    );
}
