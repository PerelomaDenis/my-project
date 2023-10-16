import './styles/index.scss';
import { Suspense, useContext } from 'react';
import { ThemeContext } from './providers/ThemeProvider/libs/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

export const App = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Suspense fallback="Loading...">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}