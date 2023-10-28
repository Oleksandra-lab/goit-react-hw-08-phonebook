import React from 'react';
import {ContactItem, ContactName, ContactNumber, DeleteBtn} from './ContactList.styled'

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  console.log(contacts);
  console.log(filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
  
    <ul>
      {filteredContacts.map(({id, name, phone}) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={onDeleteContact}
        />
      ))}
    </ul>

)}

const ContactListItem = ({ id, name, phone, deleteContact}) => (
  
    <ContactItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DeleteBtn onClick={() => deleteContact(id)}>Delete</DeleteBtn>
    </ContactItem>
  
)
 export default ContactList