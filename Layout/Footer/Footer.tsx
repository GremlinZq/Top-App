// Styles
import styles from './Footer.module.scss';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <span>OwlTop © 2020 - {currentYear} Все права защищены</span>
            </div>
            <div className={styles.right}>
                <a href='#'>Пользовательское соглашение</a>
                <a href='#'>Политика конфиденциальности</a>
            </div>
        </div>
    )
}