import Head from "next/head";
import {NotFound} from "../components/NotFound/NotFound";

export default function NotFoundPage() {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>

            <NotFound />
        </>
    )
}