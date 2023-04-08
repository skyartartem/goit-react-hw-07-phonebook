import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from 'service/contactsApi';

export const fetchAllThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { reject }) => {
    try {
      const { data } = fetchContacts();
      return data;
    } catch (e) {
      return reject(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { reject }) => {
    try {
      const { data } = addContact(contact);
      return data;
    } catch (e) {
      return reject(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { reject }) => {
    try {
      const { data } = deleteContact(id);
      return data;
    } catch (e) {
      return reject(e.message);
    }
  }
);