import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, Key, useCallback, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption<T> {
    value: T;
    content: string;
}

interface SelectProps<T> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    disabled?: boolean;
}

export function Select<T>(props: SelectProps<T>) {
    const { className, label, options, value, onChange, disabled } = props;

    const optionList = useMemo(
        () =>
            options?.map((option) => (
                <option
                    className={cls.option}
                    key={option.value as Key}
                    value={option.value as string}
                >
                    {option.content}
                </option>
            )),
        [options],
    );
    const onSelectChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value as T);
            }
        },
        [onChange],
    );

    return (
        <div className={classNames(cls.selectWrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                value={value as string}
                onChange={onSelectChange}
                className={classNames(
                    cls.select,
                    { [cls.disabled]: disabled },
                    [],
                )}
                disabled={disabled}
            >
                {optionList}
            </select>
        </div>
    );
}
