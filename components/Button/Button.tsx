// Core
import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

// styles
import cn from 'classnames';
import styles from './Button.module.scss';

// types
interface ButtonType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode
    appearance?: 'primary' | 'ghost'
}

export const Button = ({appearance = 'ghost', children, ...props}: ButtonType) => (
    <button {...props} className={cn(styles.button, appearance && styles[appearance])}>{children}</button>
)