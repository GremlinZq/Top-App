// Core
import {ReactNode} from "react";

// Styles
import styles from './Htag.module.scss';

type HtagType = {
    children: ReactNode
    Tag: 'h1' | 'h2' | 'h3';
}

export const Htag = ({Tag, children}: HtagType) => (
    <Tag className={styles[Tag]}>{children}</Tag>
)