
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/operations";
import filtersReducer from "./filters/filtersSlice";
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
import authReducer from "../redux/auth/slice"


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contatcs: contactsReducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
  })
});

const authPersistConfig = {
  key: "contacts",
  // "authSlice"
  storage,
  whitelist: ["token"],
};

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filters: filterReducer,
// })

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


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

