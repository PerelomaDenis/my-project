import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/ui/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    value: string;
    className?: string;
    tabs: TabItem[];
    onTabClick: (tab: TabItem) => void;
}

export function Tabs(props: TabsProps) {
    const { className, value, tabs, onTabClick } = props;

    const clickHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    key={tab.value}
                    onClick={clickHandler(tab)}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
}
