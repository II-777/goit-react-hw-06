import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      const contact = action.payload;
      state.items.push(contact);
      console.log('INFO Adding contact:', { ...action.payload });
    },
    deleteContact: (state, action) => {
      const contactIdToDelete = action.payload;
      const contactToDelete = state.items.find(contact => contact.id === contactIdToDelete);
      console.log('INFO Deleting contact:', contactToDelete ? { ...contactToDelete } : 'Contact not found');
      state.items = state.items.filter(contact => contact.id !== contactIdToDelete);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
