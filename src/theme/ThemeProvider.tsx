import { ReactNode, useCallback, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;

    const [theme, setTheme] = useState<Theme>(defaultTheme)
    console.log(theme)
    const toggleTheme = useCallback(() => {
        console.log(222)
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [theme])

    const value: ThemeContextProps = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}