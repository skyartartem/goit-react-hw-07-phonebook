import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchAllThunk } from './contactsThunk';
// import { nanoid } from 'nanoid';
// import { fetchTasks, addTask } from './operations';

const handlePending = (state) => { state.isLoading = true }
const handleReject = (state, action) => { state.error = action.payload }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllThunk.pending, handlePending)
      .addCase(fetchAllThunk.rejected, handleReject)
      .addCase(fetchAllThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.rejected, handleReject)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.rejected, handleReject)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      });
  },
});

export const { addContactsAction, removeContactsAction } = contactsSlice.actions;
export const contactsReducer =  contactsSlice.reducer;

