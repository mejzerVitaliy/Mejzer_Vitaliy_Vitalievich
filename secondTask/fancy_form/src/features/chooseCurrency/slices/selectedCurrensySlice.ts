import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Currency } from "../../../app/types/typesOfCurrencies"

interface SelectedCurrency {
    selectedCurrency: Currency | null
}

const initialState: SelectedCurrency = { selectedCurrency: null }

export const selectedCurrencySlice = createSlice({
    name: 'selectedCurrency',
    initialState,
    reducers: {
        setSelectedCurrency: (state, action: PayloadAction<Currency>) => {
            state.selectedCurrency = action.payload
        }
    }
})

export const { setSelectedCurrency } = selectedCurrencySlice.actions
export default selectedCurrencySlice.reducer
