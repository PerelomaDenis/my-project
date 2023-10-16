import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher(props: LangSwitcherProps) {
    const { className } = props;

    const { i18n } = useTranslation();

    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button onClick={toggleLanguage} className={classNames('', {}, [className])}>
            {i18n.language === 'ru' ? 'Русский' : 'English'}
        </Button>
    );
}
