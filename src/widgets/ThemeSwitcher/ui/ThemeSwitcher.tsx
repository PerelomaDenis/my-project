import { classNames } from 'shared/lib/classNames/classNames';
import ThemeDarkIcon from 'shared/assets/icons/theme-dark.svg';
import ThemeLightIcon from 'shared/assets/icons/theme-light.svg';
import {
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/libs/ThemeContext';
import { useContext } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
        </Button>
    );
}
