import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

 export const contactsSlice = createSlice({
   name: 'contacts',
   initialState: [
     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
   ],
   reducers: {
     add(state, action) {
       state.push({
         id: nanoid(),
         name: action.payload.name,
         number: action.payload.number,
       });
       // return [...state, action.payload];
     },
     remove(state, action) {
      return state.filter(item => item.id !== action.payload);
     },
   },
 });

export const { add, remove } = contactsSlice.actions;
