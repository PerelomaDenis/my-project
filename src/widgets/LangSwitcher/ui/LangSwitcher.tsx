import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    shortLang?: boolean;
}

export function LangSwitcher(props: LangSwitcherProps) {
    const { className, shortLang } = props;

    const { t, i18n } = useTranslation();

    const toggleLanguage = () =>
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {shortLang ? t('Короткий язык') : t('Язык')}
        </Button>
    );
}
