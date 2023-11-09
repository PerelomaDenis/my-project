import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { useLocation, Navigate } from 'react-router-dom';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { PropsWithChildren } from 'react';

interface RequireAuthProps {
    authOnly?: boolean;
}

export function RequireAuth(props: PropsWithChildren<RequireAuthProps>) {
    const { authOnly, children } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth && authOnly) {
        return (
            <Navigate to={routePaths.main} state={{ from: location }} replace />
        );
    }

    return children;
}
