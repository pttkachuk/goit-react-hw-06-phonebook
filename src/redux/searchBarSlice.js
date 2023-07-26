import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
};

const searchBarSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filter: (state, action) => {
            state.filter = action.payload.toLowerCase();
        },
    },
});

export const { filter } = searchBarSlice.actions;
export const filterReducer = searchBarSlice.reducer;
