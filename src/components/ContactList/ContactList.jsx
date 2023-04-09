import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContactThunk, fetchAllThunk } from 'redux/contactsThunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  console.log(loading);
  const query = useSelector(state => state.filter)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllThunk());
  }, [dispatch]);
  const filteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredContacts;
  };

  return (<>
    { loading && <div>loading...</div>}
    <ul className={css.list}>
      {filteredContacts().map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <span>{contact.name}:</span>
            <span className={css.number}> {contact.phone}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </>
  );
};
