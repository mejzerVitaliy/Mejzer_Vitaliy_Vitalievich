import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Currency } from "../../../app/types/typesOfCurrencies"

interface SelectedCurrency {
    selectedCurrency: Currency | null
}

const initialState: SelectedCurrency = { selectedCurrency: null }

export const selectedIntoCurrencySlice = createSlice({
    name: 'selectedIntoCurrency',
    initialState,
    reducers: {
        setSelectedIntoCurrency: (state, action: PayloadAction<Currency>) => {
            state.selectedCurrency = action.payload
        }
    }
})

export const { setSelectedIntoCurrency } = selectedIntoCurrencySlice.actions
export default selectedIntoCurrencySlice.reducer