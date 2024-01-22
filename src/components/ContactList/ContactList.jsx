import React from 'react';
import { useSelector } from 'react-redux';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactList.styled';
import { selectContacts } from 'redux/contacts.selectors';
import { selectContactsFilterTerm } from 'redux/contacts.selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsReducer';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilterTerm);
  console.log(contacts);
  console.log(filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    console.log(contactId);
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ _id: id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

const ContactListItem = ({ id, name, phone, deleteContact }) => (
  <ContactItem>
    <ContactName>{name}</ContactName>
    <ContactNumber>{phone}</ContactNumber>
    <DeleteBtn onClick={() => deleteContact(id)}>Delete</DeleteBtn>
  </ContactItem>
);
export default ContactList;
