
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contatcs: contactsReducer,
    filters: filtersReducer,
  },
});


























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

