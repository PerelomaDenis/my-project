import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export function Icon(props: IconProps) {
    const { className, Svg } = props;
    return <Svg className={classNames(cls.Icon, {}, [className])} />;
}
