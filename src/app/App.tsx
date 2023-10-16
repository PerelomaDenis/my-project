import './styles/index.scss';
import { useContext } from 'react';
import { ThemeContext } from './providers/ThemeProvider/libs/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}