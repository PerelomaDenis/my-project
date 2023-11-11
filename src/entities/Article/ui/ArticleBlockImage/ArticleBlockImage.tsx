import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import cls from './ArticleBlockImage.module.scss';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlock;
}

export function ArticleBlockImage(props: ArticleImageBlockProps) {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            <img src={block.src} className={cls.image} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
}
