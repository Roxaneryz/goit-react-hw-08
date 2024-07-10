import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addcontact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            toast.success("Contact successfully created!");
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            toast.success("Contact successfully deleted!");
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({id, ...contact}, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/contacts/${id}`,
        contact
      );
      toast.success("Contact updated successfully!");
      return response.data;
    } catch (error) {
      toast.error("Failed to update contact.");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);