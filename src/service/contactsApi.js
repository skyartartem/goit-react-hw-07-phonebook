import axios from 'axios';
const BASE_URL = 'https://6431d76ad0127730d2c8fae7.mockapi.io';

export const fetchContacts = async () => {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response;
};
export const addContact = async contact => {
    const response = await axios.post(`${BASE_URL}/contacts`, contact);
    return response;
};
export const deleteContact = async (id) => {
     const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
      return response;
  
};