import './styles/index.scss';
import { Suspense, useContext } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { ThemeContext } from './providers/ThemeProvider/libs/ThemeContext';

export function App() {
    const { theme } = useContext(ThemeContext);
    console.log(theme);
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
    );
}
