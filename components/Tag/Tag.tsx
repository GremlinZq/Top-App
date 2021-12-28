// Core
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import Link from "next/link";

// Styles
import cn from 'classnames';
import styles from './Tag.module.scss';

// Types
interface TagType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement > {
    children: ReactNode
    href?: string
    bgColor?: 'gray' | 'green' | 'red' | 'primary'
}

export const Tag = ({children, href, bgColor, ...props}:TagType) => {
    return <div {...props} className={cn(styles.tag, bgColor && styles[bgColor])}>
        {href ? <Link href={href}>{children}</Link> : <>{children}</>}
    </div>
}