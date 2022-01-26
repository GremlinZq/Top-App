import Link from 'next/link';
import styles from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <div className={styles.center}>
            <div className={styles.error}>
                <div className={styles.number}>4</div>
                <div className={styles.illustration}>
                    <div className={styles.circle}></div>
                    <div className={styles.clip}>
                        <div className={styles.paper}>
                            <div className={styles.face}>
                                <div className={styles.eyes}>
                                    <div className={`${styles.eye} ${styles.eyeLeft}`}></div>
                                    <div className={`${styles.eye} ${styles.eyeRight}`}></div>
                                </div>
                                <div className={`${styles.rosyCheeks} ${styles.rosyCheeksLeft}`}></div>
                                <div className={`${styles.rosyCheeks} ${styles.rosyCheeksRight}`}></div>
                                <div className={styles.mouth}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.number}>4</div>
            </div>

            <div className={styles.text}>Oops. The page you're looking for doesn't exist.</div>

            <Link href="/">
                <a className={styles.button}>
                    Back Home
                </a>
            </Link>
        </div>
    )
};