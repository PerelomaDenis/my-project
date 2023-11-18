import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
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
                                    {element}
                                </RequireAuth>
                            }
                        />
                    ),
                )}
            </Routes>
        </Suspense>
    );
}
