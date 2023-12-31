import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {
    const { className } = props;

    const sidebarItems = useSelector(getSidebarItems);

    const [collapsed, setCollapsed] = useState(false);
    const menuLinks = useMemo(
        () =>
            sidebarItems.map((item) => (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItems],
    );

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.menuItems}>{menuLinks}</div>
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
