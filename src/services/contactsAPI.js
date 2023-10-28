import axios from 'axios'

export const fetchContacts = async () => {
    const {data} = await axios.get (
        `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts`
    );
    console.log(data);
    return data
}

export const deleteContact = async (id) => {
    const {data} = await axios.delete(
        `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts/${id}`
    );
    return data
}

export const addContact = async (newContact) => {
    const {data} = await axios.post(
        `https://6536c8b2bb226bb85dd29f68.mockapi.io/api/v1/contacts/`, newContact
    );
    return data
}
