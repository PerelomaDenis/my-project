import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleBlockCode.module.scss';

interface ArticleBlockCodeProps {
    className?: string;
    block: ArticleCodeBlock;
}

export function ArticleBlockCode(props: ArticleBlockCodeProps) {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleBlockCode, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
}
