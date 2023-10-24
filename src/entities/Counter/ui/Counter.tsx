import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export function Counter() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const value = useSelector(getCounterValue);
    return (
        <div data-testid="counter">
            <div data-testid="counter-value">{value}</div>
            <Button
                data-testid="counter-value-increment"
                onClick={() => dispatch(counterActions.increment())}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="counter-value-decrement"
                onClick={() => dispatch(counterActions.decrement())}
            >
                {t('decrement')}
            </Button>
        </div>
    );
}
