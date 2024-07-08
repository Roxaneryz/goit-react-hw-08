import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = token => {
    axios.defaults.common["Authorization"] = `Bearer ${token}`;
}
const clearAuthHeader = () => {
    axios.defaults.common["Authorization"] = "";
}


export const register = createAsyncThunk("auth/register", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post("/users/singup", userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error){
      return thunkAPI.rejectWithValue(error.message)  
    }
});

export const logIn = createAsyncThunk("auth/login",
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.post("/users/loin", userInfo)
             setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    
    }
);

export const logOut = createAsyncThunk("users/logout", async (_, thunkAPI) => {
    try {
        // const response =
        await axios.post("/users/logout");
        // return response.data;
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    setAuthHeader(savedToken);
    const response = await axios.get("/users/current");
    return response.data;
}, {
    condition: (_, { getState }) => {
        const reduxState = getState();
        const savedToken = reduxState.auth.token;

        return savedToken !== null;
    },
});