import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject,
    PropsWithChildren,
    UIEventHandler,
    useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getScrollSaveByPath, scrollSaveActions } from 'features/scrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
}

export function Page(props: PropsWithChildren<PageProps>) {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollSaveByPath(state, pathname),
    );

    const onScroll = useThrottle((e: any) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
        </section>
    );
}
