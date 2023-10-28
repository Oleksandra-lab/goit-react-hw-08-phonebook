import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/contactsAPI';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const requestContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contactsData = await fetchContacts();
      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestAddContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await addContact(newContact);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder

      .addCase(requestContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })

      .addCase(requestDeleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
      })
      .addCase(requestAddContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          requestAddContact.pending,
          requestDeleteContact.pending,
          requestContacts.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
     
      .addMatcher(
        isAnyOf(
          requestAddContact.rejected,
          requestDeleteContact.rejected,
          requestContacts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
