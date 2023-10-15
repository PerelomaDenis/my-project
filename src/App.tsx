import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="bbb">33333</div>
            <button onClick={toggleTheme}>Тема {theme === Theme.DARK ? 'темная' : 'светлая'}</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />}  />
                    <Route path='/about' element={<AboutPageAsync />}  />
                </Routes>
                <Link to='/'>Main page</Link>
                <Link to='/about'>About page</Link>
            </Suspense>
        </div>
    )
}