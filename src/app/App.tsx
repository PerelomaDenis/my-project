import './styles/index.scss';
import { Suspense, useContext, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { ThemeContext } from './providers/ThemeProvider/libs/ThemeContext';

export function App() {
    const { theme } = useContext(ThemeContext);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
