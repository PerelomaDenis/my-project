import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { RequireAuth } from 'app/providers/routes/ui/RequireAuth';

export function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(
                    ({ element, path, authOnly }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <RequireAuth authOnly={authOnly}>
                                    <div className="pageWrapper">{element}</div>
                                </RequireAuth>
                            }
                        />
                    ),
                )}
            </Routes>
        </Suspense>
    );
}
