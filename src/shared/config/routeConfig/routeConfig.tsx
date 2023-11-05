import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFound } from 'pages/NotFound';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not-found',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: routePaths.main,
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: routePaths.about,
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: routePaths.profile,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFound />,
        path: routePaths['not-found'],
    },
};
