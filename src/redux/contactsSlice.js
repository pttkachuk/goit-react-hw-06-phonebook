import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContacts: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContacts: (state, action) => {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
