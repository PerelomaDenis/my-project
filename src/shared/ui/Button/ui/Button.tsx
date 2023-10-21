import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Варианты темы кнопки
     */
    theme?: ButtonTheme;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        ...otherProps
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
