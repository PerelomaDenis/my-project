import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { SidebarElement } from 'widgets/Sidebar/model/sidebarItems';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarElement;
    collapsed: boolean;
}

export function SidebarItem(props: SidebarItemProps) {
    const { item, collapsed } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(cls.menuItem, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.INVERTED}
            to={item.path}
        >
            <item.Icon className={cls.menuIcon} />
            <span className={cls.menuLinkText}>{t(item.title)}</span>
        </AppLink>
    );
}