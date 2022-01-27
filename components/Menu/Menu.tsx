// API
import {useGetMenuServicesQuery} from '../../api/services';
// Next Link
import Link from 'next/link';
// Interface
import {FirstLevelMenuItem, TopLevelCategory} from '../../interface';
// SVG Components
import CoursesSVG from './icons/courses.svg';
import ServicesSVG from './icons/services.svg';
import BooksSVG from './icons/books.svg';
import ProductsSVG from './icons/product.svg';
// Styles
import styles from './Menu.module.scss';

export const Menu = () => {
    const {data, error, isLoading} = useGetMenuServicesQuery(0);

    const firstLevelMenu: FirstLevelMenuItem[] = [
        {route: 'courses', name: 'Курсы', icon: <CoursesSVG/>, id: TopLevelCategory.Courses},
        {route: 'services', name: 'Сервисы', icon: <ServicesSVG/>, id: TopLevelCategory.Services},
        {route: 'books', name: 'Книги', icon: <BooksSVG/>, id: TopLevelCategory.Books},
        {route: 'products', name: 'Продукты', icon: <ProductsSVG/>, id: TopLevelCategory.Products},
    ];
    // UI elements
    const loadingTSX = isLoading && <div>Loading in progress</div>;
    const errorsTSX = error && <div>Error loading data</div>;

    return (
        <>
            {loadingTSX}
            {errorsTSX}
            <nav role='navigation'>
                <ul>

                </ul>
            </nav>
        </>
    );
};