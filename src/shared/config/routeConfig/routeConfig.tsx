import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFound } from 'pages/NotFound';
import ArticlesPage from 'pages/ArticlesPage/ui/ArticlesPage/ArticlesPage';
import ArticleDetailPage from 'pages/ArticleDetailPage/ui/ArticleDetailPage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not-found',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
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
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: routePaths.articles,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        element: <ArticleDetailPage />,
        path: `${routePaths.article_details}:articleId`,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: `${routePaths.profile}:profileId`,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFound />,
        path: routePaths['not-found'],
    },
};
