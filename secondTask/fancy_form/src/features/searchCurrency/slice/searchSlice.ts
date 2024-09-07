import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SearchQuery{
    query: string | null
}

const initialState: SearchQuery = { query: null }

export const searchSlice = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        }
    }
})

export const { setSearchQuery } = searchSlice.actions
export default searchSlice.reducer