import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height: string | number;
    width: string | number;
    border?: string;
}

export function Skeleton(props: SkeletonProps) {
    const { className, height, border, width } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
}
