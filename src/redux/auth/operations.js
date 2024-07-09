import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";


// Функція для встановлення токена авторизації в заголовки запитів

const setAuthHeader = token => {
    axios.defaults.common["Authorization"] = `Bearer ${token}`;
}

// Функція для очищення заголовків авторизації

const clearAuthHeader = () => {
    axios.defaults.common["Authorization"] = "";
}

// Операція для реєстрації нового користувача

export const register = createAsyncThunk("auth/register", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post("/users/singup", userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error){
      return thunkAPI.rejectWithValue(error.message)  
    }
});

// Операція для входу користувача

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

// Операція для виходу користувача

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

// Операція для оновлення користувача за токеном

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  // Базовий тип екшену
  const reduxState = thunkAPI.getState();
  // Отримання збереженого токена з стану auth
  const savedToken = reduxState.auth.token;

  //    if (savedToken === null) {
  // Якщо токен відсутній, повертаємо помилку
    //   return thunkAPI.rejectWithValue("Unable to fetch user");
    
  setAuthHeader(savedToken);
  const response = await axios.get("/users/current");
  return response.data;
}, {
    condition: (_, { getState }) => {
      // Відправка GET-запиту для отримання поточного користувача
      const reduxState = getState();
      const savedToken = reduxState.auth.token;

      return savedToken !== null;
    },
});