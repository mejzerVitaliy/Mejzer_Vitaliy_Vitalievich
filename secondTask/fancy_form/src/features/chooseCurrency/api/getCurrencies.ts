import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Currency } from "../../../app/types/typesOfCurrencies";

const base_url = 'https://interview.switcheo.com/'

export const getCurrencies = createApi({
    reducerPath: 'getCurrencies',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getCurrencies: builder.query<Currency[], void>({
            query: () => 'prices.json'
        })
    })
});

export const {useGetCurrenciesQuery} = getCurrencies
  