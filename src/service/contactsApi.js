import axios from 'axios';
axios.defaults.baseURL = 'https://6431d76ad0127730d2c8fae7.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
      const { data } = await axios.get('/contacts');
      return data
  } catch (e) {}
};
export const addContact = (contact) => async dispatch => {
  try {
      const { data } = await axios.post('/contacts', contact);
      return data;
  } catch (e) {}
};
export const deleteContact = (id) => async dispatch => {
  try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
  } catch (e) {}
};