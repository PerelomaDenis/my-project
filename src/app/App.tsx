import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { Theme, ThemeContext } from './providers/ThemeProvider/libs/ThemeContext';
import { classNames } from 'shared/helpers/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="bbb">33333</div>
            <button onClick={toggleTheme}>Тема {theme === Theme.DARK ? 'темная' : 'светлая'}</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />}  />
                    <Route path='/about' element={<AboutPage />}  />
                </Routes>
                <Link to='/'>Main page</Link>
                <Link to='/about'>About page</Link>
            </Suspense>
        </div>
    )
}