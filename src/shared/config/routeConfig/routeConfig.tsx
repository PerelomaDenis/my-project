import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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
};
