import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export function Avatar(props: AvatarProps) {
    const { className, alt, src, size } = props;

    const style = useMemo(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <img
            src={src}
            alt={alt}
            style={style}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
}
