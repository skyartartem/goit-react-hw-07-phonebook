import axios from 'axios';
const BASE_URL = 'https://6431d76ad0127730d2c8fae7.mockapi.io';

export const fetchContacts = async () => {
  try {
      const  { data }  = await axios.get(`${BASE_URL}/contacts`);
      return data
  } catch (e) {}
};
export const addContact = async contact => {
  try {
    const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
    return data;
  } catch (e) {}
};
export const deleteContact = async (id) => {
  try {
      const { data } = await axios.delete(
        `${BASE_URL}/contacts/${id}`
      );
      return data;
  } catch (e) {}
};