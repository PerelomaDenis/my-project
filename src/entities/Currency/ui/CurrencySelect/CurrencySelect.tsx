import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Currency } from 'entities/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export function CurrencySelect(props: CurrencySelectProps) {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation();

    const options = useMemo(
        () => [
            {
                value: Currency.RUB,
                content: Currency.RUB,
            },
            {
                value: Currency.EUR,
                content: Currency.EUR,
            },
            {
                value: Currency.USD,
                content: Currency.USD,
            },
        ],
        [],
    );

    return (
        <Select
            disabled={readonly}
            value={value}
            onChange={onChange}
            options={options}
            className={classNames('', {}, [className])}
            label={t('Валюта')}
        />
    );
}
