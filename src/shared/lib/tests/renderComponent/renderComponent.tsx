import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTesting from 'shared/config/i18n/i18nForTesting';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function renderComponent(
    component: ReactNode,
    initialStore?: DeepPartial<StateSchema>,
) {
    return render(
        <StoreProvider initialStore={initialStore}>
            <MemoryRouter>
                <I18nextProvider i18n={i18nForTesting}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
