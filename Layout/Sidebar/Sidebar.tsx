// Components
import {Menu} from "../../components";

// Styles
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Menu />
        </div>
    )
};