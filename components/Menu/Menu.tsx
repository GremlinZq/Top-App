//Core
import { useGetMenuServicesQuery } from "../../api/services";

// styles
import styles from './Menu.module.scss';

import Link from "next/link";

export const Menu = () => {
    const { data, error, isLoading } = useGetMenuServicesQuery(7);

    return (
        <div className={styles.menu}>
            {/*{error && <>Oh no, there was an error</>} */}
            <div>{data && data.map(el => <Link href={`/`}>{el._id.secondCategory}</Link>)}</div>
        </div>
    )
};