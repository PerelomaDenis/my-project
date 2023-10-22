import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Варианты темы кнопки
     */
    theme?: ButtonTheme;
    /**
     * Варианты размера кнопки
     */
    size?: ButtonSize;
    /**
     * Квадратная кнопка
     */
    square?: boolean;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
    const {
        className,
        children,
        square,
        theme = ButtonTheme.CLEAR,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.square]: square }, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
}
