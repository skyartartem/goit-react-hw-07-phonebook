import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from 'service/contactsApi';

export const fetchAllThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, err) => {
    try {
      const response = await fetchContacts();
      // data.then(console.log);
      return response.data;
    } catch (e) {
      return err.rejectWithValue(e.message);
    } 
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, err) => {
    try {
      const response = await addContact(contact);
      return response.data;
    } catch (e) {
      return err.rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, err) => {
    try {
      const response = await deleteContact(id);
      return response.data;
    } catch (e) {
      return err.rejectWithValue(e.message);
    }
  }
);