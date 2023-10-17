import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button data-testid="sidebar-button-collapse" onClick={toggleCollapsed}>TOGGLE</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}
