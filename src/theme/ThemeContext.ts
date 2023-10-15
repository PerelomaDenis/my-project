import { createContext } from 'react';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export interface ThemeContextProps {
    theme?: Theme;
    toggleTheme?: () => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const ThemeContext = createContext<ThemeContextProps>({});
