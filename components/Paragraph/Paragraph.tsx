// Core
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

// styles
import cn from 'classnames';
import styles from './Paragraph.module.scss';

// interface
interface ParagraphType extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'small' | 'average' | 'big'
    children: ReactNode
}

export const Paragraph = ({size = 'average', children, ...props}:ParagraphType) => {
    return <p {...props} className={cn(styles.paragraph, styles[size])}>
        {children}
    </p>
}