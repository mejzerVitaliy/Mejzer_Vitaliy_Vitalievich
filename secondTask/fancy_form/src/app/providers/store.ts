import { configureStore } from "@reduxjs/toolkit";
import { getCurrencies } from "../../features/chooseCurrency/api/getCurrencies";
import openModalSlice from "../../features/chooseCurrency/slices/openModalSlice";
import selectedCurrencyReducer from "../../features/chooseCurrency/slices/selectedCurrensySlice"; // используйте именно reducer
import selectedIntoCurrencySlice from "../../features/chooseCurrency/slices/selectedIntoCurrencySlice";
import openModal2Slice from "../../features/chooseCurrency/slices/openModal2Slice";
import selectedValueSlice from "../../entites/inputValue/slice/selectedValueSlice";
import searchSlice from "../../features/searchCurrency/slice/searchSlice";


export const store = configureStore({
    reducer: {
        [getCurrencies.reducerPath]: getCurrencies.reducer,
        openModal: openModalSlice,
        openModal2: openModal2Slice,
        selectedCurrency: selectedCurrencyReducer,
        selectedIntoCurrency: selectedIntoCurrencySlice,
        selectedValue: selectedValueSlice,
        searchQuery: searchSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getCurrencies.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

