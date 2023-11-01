import axios from 'axios';

const phonebookInstance = axios.create({
  baseUrl: 'https://connections-api.herokuapp.com/',
  headers: {
    Authorization: 'Bearer...',
  },
});

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('​/users​/signup', formData);

  return data;
};

export const requestLogin = async formData => {
  const { data } = await phonebookInstance.post('​/users​/login', formData);

  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('​/users​/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('​/users​/current');

  return data;
};

export const fetchContacts = async () => {
    const {data} = await axios.get (
        `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts`
    );
    console.log(data);
    return data
}

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts/${id}`
  );
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post(
    `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts/`,
    newContact
  );
  return data;
};
