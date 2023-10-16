import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <AppLink className={cls.mainLink} theme={AppLinkTheme.INVERTED} to={routePaths.main}>Main page</AppLink>
            <AppLink theme={AppLinkTheme.INVERTED} to={routePaths.about}>About page</AppLink>
        </div>
    );
};
