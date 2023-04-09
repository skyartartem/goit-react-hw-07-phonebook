import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContactThunk, fetchAllThunk } from 'redux/contactsThunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllThunk());
  }, [dispatch]);
  const filteredContacts = () => {
    const filteredContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <>
      {isLoading && <p>loading...</p>}
      {error && <p>Something went wrong...</p>}
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
