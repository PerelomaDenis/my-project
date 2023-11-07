import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Country } from 'entities/Country';

interface CurrencySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export function CountrySelect(props: CurrencySelectProps) {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation();

    const options = useMemo(
        () => [
            {
                value: Country.Russia,
                content: Country.Russia,
            },
            {
                value: Country.Belarus,
                content: Country.Belarus,
            },
            {
                value: Country.Kazakhstan,
                content: Country.Kazakhstan,
            },
            {
                value: Country.Ukraine,
                content: Country.Ukraine,
            },
            {
                value: Country.Armenia,
                content: Country.Armenia,
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
            label={t('Страна')}
        />
    );
}
