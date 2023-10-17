import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test main class', () => {
        expect(classNames('app')).toBe('app');
    });

    test('test main class with additional classes', () => {
        expect(classNames('app', {}, ['center row'])).toBe('app center row');
    });

    test('test main class with additional classes with mods', () => {
        expect(
            classNames(
                'app',
                { hovered: undefined, collapsed: false, disabled: true },
                ['center row'],
            ),
        ).toBe('app center row disabled');
    });
});
