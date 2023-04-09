import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postAddContact, deleteContact } from 'redux/operation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [postAddContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [postAddContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [fetchContacts.rejected]: handleRejected,
    [postAddContact.pending]: handleRejected,
    [deleteContact.pending]: handleRejected,
  },
});
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = filterSlice.actions;
