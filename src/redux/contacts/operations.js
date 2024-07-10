import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import toast from "react-hot-toast";

axios.defaults.baseURL = "https://6681bf7704acc3545a0783c6.mockapi.io";

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
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            await axios.delete("/contacts/${contactId}");
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const updateContact = createAsyncThunk(
//   "contacts/updateContact",
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.patch(
//         `/api/contacts/${contact.id}`,
//         contact
//       );
//       toast.success("Contact updated successfully!");
//       return response.data;
//     } catch (error) {
//       toast.error("Failed to update contact.");
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );