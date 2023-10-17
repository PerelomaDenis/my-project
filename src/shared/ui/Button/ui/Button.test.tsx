import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button';

describe('Button', () => {
    test('render Button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('render Button theme clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
