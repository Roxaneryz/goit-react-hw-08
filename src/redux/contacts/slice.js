import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/slice";
import { logOut } from "../auth/operations";

import { selectContacts } from "./selectors";


const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      // addContact
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // deleteContact
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) 
    .addCase(logOut.fulfilled, (state) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;

    });
  },
});



export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactSlice.reducer;




















// const initialContactsState = {
//     items: [
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ]
// };



// const contactSlice = createSlice({
//   name: "contact",
//   initialState:initialContactsState,
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });



// export const { addContact, deleteContact } = contactSlice.actions;
// export const selectContacts = state => state.contacts.items;

// export default contactSlice.reducer;



















// import { createAction, createReducer, createSlice,  } from "@reduxjs/toolkit";



// const newReduser = createReducer({ value: 5 }, (builder) => {
//     builder
//       .addCase("balance/deposit", (state, action) => {})
//         .addCase("balance2/deposit2", (state, action) => {
//             state.value += action.payload; //this immer//
//       })
// })


// const slice = createSlice({ //this makes automaticaly actions//
//     name: "balance",
//     initialState: {
//         value:5,
//     },
//     reducers: {
//         deposite (state, action) {},
//         withdraw(state, action) {state.value += action.payload; },
//         a() { },
//     }
// })

// export const action = createAction("balance/deposit");
// export const action2 = createAction("balance2/deposit2");