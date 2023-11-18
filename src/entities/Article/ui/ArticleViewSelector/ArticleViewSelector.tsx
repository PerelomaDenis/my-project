import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import SmallViewIcon from 'shared/assets/icons/view_small.svg';
import BigViewIcon from 'shared/assets/icons/view_big.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallViewIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigViewIcon,
    },
];

export function ArticleViewSelector(props: ArticleViewSelectorProps) {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(
                            '',
                            { [cls.selected]: viewType.view === view },
                            [],
                        )}
                    />
                </Button>
            ))}
        </div>
    );
}
