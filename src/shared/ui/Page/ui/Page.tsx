import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, PropsWithChildren, useRef } from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
}

export function Page(props: PropsWithChildren<PageProps>) {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
}
