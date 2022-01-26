// Core
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Types
import {MenuItem} from "../../types";

export const topPageAPI = createApi({
    reducerPath: 'topPageApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_DOMAIN}` }),
    endpoints: (builder) => ({
        // получение сервисов для меню
        getMenuServices: builder.query<Array<MenuItem>, number>({
            query: (firstCategory) => ({
                url: `/api/top-page/find`,
                method: 'POST',
                body: {firstCategory},
            }),
        }),
    }),
});

export const { useGetMenuServicesQuery } = topPageAPI;