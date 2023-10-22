import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18nForTesting';
import '@testing-library/jest-dom';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        renderComponent(<Sidebar />);
        const button = screen.getByTestId('sidebar-button-collapse');
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
