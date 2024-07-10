
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/slice"

const authPersistConfig = {
  key: "auth",
  // "authSlice"
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
  })
});



// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filters: filterReducer,
// })



// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         serializableCheck: {
//           ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//   })
// });

export const persistor = persistStore(store);






























// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "@reduxjs/toolkit";
// import contactsReducer from "./contactsSlice";
// import filterReducer from "./filtersSlice";


// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["contacts"], 
// };

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist:["contacts"],
// }

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filters: filterReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         serializableCheck: {
//           ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//   })
// });

// export const persistor = persistStore(store);

