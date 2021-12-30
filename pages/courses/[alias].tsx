// Core
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {ParsedUrlQuery} from "querystring";
import Link from "next/link";
import axios from "axios";

//Types
import { MenuItem, ProductsPageModel, TopPageModel } from "../../types";

// startDataAPI
const firstCategory = 0;

const HomePage = ({menu, page}: InferGetStaticPropsType<typeof getStaticProps>) => {

    console.log(page)

    return (
        <div>{menu.map(el => <Link href={`/`}>{el._id.secondCategory}</Link>)}</div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<Array<MenuItem>>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory})
    return {
        paths: menu.flatMap(item => item.pages.map(element => `/courses/${element.alias}`)),
        fallback: true
    }
}

// getStaticData
export const getStaticProps: GetStaticProps<HomePageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) return { notFound: true }

    const {data: menu} = await axios.post<Array<MenuItem>>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory})
    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const {data: products} = await axios.post<ProductsPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10,
    });

    return {
        props: {
            menu,
            page,
            products,
            firstCategory
        }
    }
}

interface HomePageProps {
    menu: Array<MenuItem>
    page: TopPageModel
    products: ProductsPageModel
    firstCategory: number
}

export default HomePage;