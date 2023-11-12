import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/menu-home.svg';
import AboutIcon from 'shared/assets/icons/menu-about.svg';
import ProfileIcon from 'shared/assets/icons/menu-profile.svg';
import ArticlesIcon from 'shared/assets/icons/menu-articles.svg';
import { SidebarElement } from 'widgets/Sidebar/model/types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItems: SidebarElement[] = [
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
    ];

    if (userData) {
        sidebarItems.push(
            {
                path: routePaths.profile + userData.id,
                Icon: ProfileIcon,
                title: 'Профиль',
                authOnly: true,
            },
            {
                path: routePaths.articles,
                Icon: ArticlesIcon,
                title: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItems;
});
