import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface selectedValueType{
    value: number | null
}

const initialState: selectedValueType = { value: null }

export const selectedValueSlice = createSlice({
    name: 'selectedValue',
    initialState,
    reducers: {
        setSelectedValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload
            console.log(state.value)
        }
    }
})

export const { setSelectedValue } = selectedValueSlice.actions
export default selectedValueSlice.reducer