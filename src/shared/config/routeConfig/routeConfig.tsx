import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFound } from 'pages/NotFound';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

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

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
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
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFound />,
        path: routePaths['not-found'],
    },
};
