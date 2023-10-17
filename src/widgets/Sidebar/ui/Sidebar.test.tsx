import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18nForTesting';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('sidebar-button-collapse');
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
