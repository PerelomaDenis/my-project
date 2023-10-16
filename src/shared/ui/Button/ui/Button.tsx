import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
    const {
        className, children, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}
