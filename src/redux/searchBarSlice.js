import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
};

const searchBarSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload.toLowerCase();
        },
    },
});

export const { setFilter } = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;
