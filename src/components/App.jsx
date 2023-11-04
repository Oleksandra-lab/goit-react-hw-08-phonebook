import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { useDispatch, } from 'react-redux';
// import {
//   requestAddContact,
//   requestContacts,
//   requestDeleteContact,
// } from 'redux/contactsReducer';
// import { setFilter } from 'redux/filterReducer';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';
import { refreshThunk } from 'redux/authReducer';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ContactsPage /> },
];

const App = () => {
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // const addContact = newContact => {
  //   const contactExist = contacts.some(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );
  //   if (contactExist) {
  //     alert(`${newContact.name} is already in contacts.`);
  //     return;
  //   }
  //   dispatch(requestAddContact(newContact));
  // };

  // const deleteContact = id => {
  //   dispatch(requestDeleteContact(id));
  // };

  // const handleFilterChange = filter => {
  //   dispatch(setFilter(filter));
  // };

  return (
    <div>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm onAddContact={addContact} />
    //   <Filter filter={filter} onFilter={handleFilterChange} />
    //   <h2>Contacts</h2>
    //   <ContactList
    //     contacts={contacts}
    //     filter={filter}
    //     onDeleteContact={deleteContact}
    //   />
    // </div>
  );
};

export default App;
