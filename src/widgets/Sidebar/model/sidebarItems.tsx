import { FunctionComponent, SVGAttributes } from 'react';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/menu-home.svg';
import AboutIcon from 'shared/assets/icons/menu-about.svg';
import ProfileIcon from 'shared/assets/icons/menu-profile.svg';

export interface SidebarElement {
    path: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    title: string;
    authOnly?: boolean;
}

export const sidebarItems: SidebarElement[] = [
    {
        path: routePaths.main,
        Icon: HomeIcon,
        title: 'Главная',
    },
    {
        path: routePaths.about,
        Icon: AboutIcon,
        title: 'О сайте',
    },
    {
        path: routePaths.profile,
        Icon: ProfileIcon,
        title: 'Профиль',
        authOnly: true,
    },
];
