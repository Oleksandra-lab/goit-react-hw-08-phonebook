import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddContact, requestContacts, requestDeleteContact } from 'redux/contactsReducer';
import { setFilter } from 'redux/filterReducer';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect( ( ) => {
    dispatch(requestContacts())

  }, [dispatch])

  const addContact = newContact => {
    const contactExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch( requestAddContact(newContact));
  };

  const deleteContact = id => {
    dispatch(requestDeleteContact(id));
  };

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <Filter filter={filter} onFilter={handleFilterChange} />
      <h2>Contacts</h2>
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
