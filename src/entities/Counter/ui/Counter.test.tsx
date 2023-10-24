import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render Counter', () => {
        renderComponent(<Counter />);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('increment', () => {
        renderComponent(<Counter />, {
            counter: { value: 10 },
        });
        const button = screen.getByTestId('counter-value-increment');
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');

        fireEvent.click(button);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('decrement', () => {
        renderComponent(<Counter />, {
            counter: { value: 10 },
        });
        const button = screen.getByTestId('counter-value-decrement');
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');

        fireEvent.click(button);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
