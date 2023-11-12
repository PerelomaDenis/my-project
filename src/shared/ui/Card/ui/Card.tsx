import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, PropsWithChildren } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export function Card(props: PropsWithChildren<CardProps>) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
}
