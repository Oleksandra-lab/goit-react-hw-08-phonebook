import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  // headers: {
  //   Authorization: 'Bearer...',
  // },
});

export const setToken = (token) => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
setToken(data.token);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');

  return data;
};
export const requestAllContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');

  return data;
};
export const requestAddContact = async (newContact) => {
  const { data } = await phonebookInstance.post('/contacts', newContact);

  return data;
};
export const requestDeleteContact = async (contactId) => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);

  return data;
};






// export const fetchContacts = async () => {
//     const {data} = await axios.get (
//         `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts`
//     );
//     console.log(data);
//     return data
// }

// export const deleteContact = async id => {
//   const { data } = await axios.delete(
//     `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts/${id}`
//   );
//   return data;
// };

// export const addContact = async newContact => {
//   const { data } = await axios.post(
//     `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts/`,
//     newContact
//   );
//   return data;
// };
