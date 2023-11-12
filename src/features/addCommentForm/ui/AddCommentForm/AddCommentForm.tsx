import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from 'features/addCommentForm/model/selectors/getAddCommentForm';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback } from 'react';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from 'features/addCommentForm/model/slices/addCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

function AddCommentForm(props: AddCommentFormProps) {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
}

export default AddCommentForm;
