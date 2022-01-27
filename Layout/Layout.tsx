// Core
import {ReactNode} from "react";

// Components
import { Header } from "./Header";
import { Footer } from "./Footer";

// Styles
import styles from './Layout.module.scss';
import {Sidebar} from "./Sidebar";

// interface
interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Header />
            <Sidebar />
                <div className={styles.body}>
                    {children}
                </div>
            <Footer />
        </div>
    )
};