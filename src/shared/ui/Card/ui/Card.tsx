import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, PropsWithChildren } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme;
}

export function Card(props: PropsWithChildren<CardProps>) {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
}
