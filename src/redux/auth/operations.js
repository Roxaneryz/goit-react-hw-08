import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";


export const register = createAsyncThunk("auth/register", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post("/users/singup", userInfo);
        return response.data;
    } catch (error){
      return thunkAPI.rejectWithValue(error.message)  
    }
});

export const logIn = createAsyncThunk("auth/login",
    async (userInfo, thunkAPI) => {
        try { const response = await axios.post("/users/loin", userInfo)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    
    }
);