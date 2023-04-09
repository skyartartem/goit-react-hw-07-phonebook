import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice'
import {fiterSlice} from './filterSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: fiterSlice.reducer,
  },
});