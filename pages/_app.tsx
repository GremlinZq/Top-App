// Core
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Provider} from 'react-redux';
import {store} from '../redux';
import {Layout} from "../Layout";

// Styles
import '../styles/globals.scss';

const MyApp = ({Component, pageProps}: AppProps) => (
    <>
        <Head>
            <title>Top App</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500;700&display=swap"
                  rel="stylesheet"/>
        </Head>

        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    </>
);

export default MyApp;