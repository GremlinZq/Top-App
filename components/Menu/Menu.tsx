// API
import {useGetMenuServicesQuery} from '../../api/services';
// Next Link
import Link from 'next/link';
// Interface
import {FirstLevelMenuItem, MenuPage, TopLevelCategory} from '../../interface';
// SVG Components
import CoursesSVG from './icons/courses.svg';
import ServicesSVG from './icons/services.svg';
import BooksSVG from './icons/books.svg';
import ProductsSVG from './icons/product.svg';
// Styles
import styles from './Menu.module.scss';
import {SyntheticEvent, useState} from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import {useAppSelector} from "../../hooks";
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Menu = () => {
    const {data, error, isLoading} = useGetMenuServicesQuery(0);
    const firstCategory = useAppSelector(state => state.RootReducer.menu.firstCategory);
    const router = useRouter();

    const firstLevelMenu: FirstLevelMenuItem[] = [
        {route: 'courses', name: 'Курсы', icon: <CoursesSVG/>, id: TopLevelCategory.Courses},
        {route: 'services', name: 'Сервисы', icon: <ServicesSVG/>, id: TopLevelCategory.Services},
        {route: 'books', name: 'Книги', icon: <BooksSVG/>, id: TopLevelCategory.Books},
        {route: 'products', name: 'Продукты', icon: <ProductsSVG/>, id: TopLevelCategory.Products},
    ];

    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map(m => (
                    <li key={m.route} aria-expanded={m.id === firstCategory}>
                        <Link href={`/${m.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id === firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </li>
                ))}
            </ul>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <ul className={styles.secondBlock}>
                {data && data.map(m => {
                    return (
                        <li key={m._id.secondCategory}>
                            <button
                                className={styles.secondLevel}
                            >{m._id.secondCategory}</button>
                            <ul
                                className={styles.secondLevelBlock}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, false)}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: MenuPage[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <li key={p._id} >
                    <Link href={`/${route}/${p.alias}`}>
                        <a
                            tabIndex={isOpened ? 0 : -1}
                            className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                            })}
                            aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
                        >
                            {p.category}
                        </a>
                    </Link>
                </li>
            ))
        );
    };

    return (
        <nav className={styles.menu} role='navigation'>
            {<span role="log" className="visualyHidden"></span>}
            {buildFirstLevel()}
        </nav>
    );
};