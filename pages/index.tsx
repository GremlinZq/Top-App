// Core
import {GetStaticProps, InferGetStaticPropsType} from "next";
import axios from "axios";

//Types
import {MenuItem} from "../types";
import Link from "next/link";


const HomePage = ({menu}: InferGetStaticPropsType<typeof getStaticProps>) => {


    console.log(menu)

    return (
        <div>{menu.map(el => <Link href={`/`}>{el._id.secondCategory}</Link>)}</div>
    );
};

// getStaticData
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const firstCategory = 0;

    const {data: menu} = await axios.post<Array<MenuItem>>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory})

    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomePageProps {
    menu: Array<MenuItem>
    firstCategory: number
}

export default HomePage;