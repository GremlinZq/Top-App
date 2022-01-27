// Core
import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

// Svg
import ArrowIcon from './arrow.svg';

// styles
import cn from 'classnames';
import styles from './Button.module.scss';

// interface
interface ButtonType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode
    appearance?: 'primary' | 'ghost'
    arrow?: 'bottom' | 'right' | 'none'
}

export const Button = ({appearance = 'ghost', arrow = 'right', children, ...props}: ButtonType) => (
    <button {...props} className={cn(styles.button, appearance && styles[appearance])}>
        {children}
        {arrow != 'none' && <ArrowIcon className={cn(styles.arrow, styles[arrow])}/>}
    </button>
)