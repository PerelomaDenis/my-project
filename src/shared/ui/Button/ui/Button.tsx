import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
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
        disabled,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                { [cls.square]: square, [cls.disabled]: disabled },
                [className, cls[theme], cls[size]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
}
