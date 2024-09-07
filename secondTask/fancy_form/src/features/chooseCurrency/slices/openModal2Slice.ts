import { createSlice } from "@reduxjs/toolkit";

interface OpenModal2{
    isModal2Open: boolean
}

const initialState: OpenModal2 = { isModal2Open: false }

export const openModal2Slice = createSlice({
    name: 'openModal2',
    initialState,
    reducers: {
        toggleOpenModal2: (state) => {
            state.isModal2Open = !state.isModal2Open
        }
    }
})

export const { toggleOpenModal2 } = openModal2Slice.actions
export default openModal2Slice.reducer