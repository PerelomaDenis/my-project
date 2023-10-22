import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/menu-home.svg';
import AboutIcon from 'shared/assets/icons/menu-about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {
    const { className } = props;

    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.menuItems}>
                <AppLink
                    className={cls.menuItem}
                    theme={AppLinkTheme.INVERTED}
                    to={routePaths.main}
                >
                    <HomeIcon className={cls.menuIcon} />
                    <span className={cls.menuLinkText}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    className={cls.menuItem}
                    theme={AppLinkTheme.INVERTED}
                    to={routePaths.about}
                >
                    <AboutIcon className={cls.menuIcon} />
                    <span className={cls.menuLinkText}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button
                className={cls.toggleButton}
                size={ButtonSize.L}
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-button-collapse"
                onClick={toggleCollapsed}
            >
                {'>'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher shortLang={collapsed} />
            </div>
        </div>
    );
}
