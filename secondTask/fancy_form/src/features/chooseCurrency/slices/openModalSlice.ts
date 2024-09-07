import { createSlice } from "@reduxjs/toolkit";

interface OpenModal{
    isModalOpen: boolean
}

const initialState: OpenModal = { isModalOpen: false }

export const openModalSlice = createSlice({
    name: 'openModal',
    initialState,
    reducers: {
        toggleOpenModal: (state) => {
            state.isModalOpen = !state.isModalOpen
        }
    }
})

export const { toggleOpenModal } = openModalSlice.actions
export default openModalSlice.reducer