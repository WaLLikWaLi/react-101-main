import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contacts/contactsSlice";
// import { filtersReducer } from "./filters/filtersSlice";
import usersReducer from "./auth/authSlice";
import teacherReducers from "./teachers/teachersSlice";
export const store = configureStore({
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ["your/action/type"],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ["meta.arg", "payload"],
  //       // Ignore these paths in the state
  //       ignoredPaths: ["items.dates"],
  //     },
  //   }),
  reducer: {
    users: usersReducer,
    teachers: teacherReducers,
    // contacts: contactsReducer,
    // filter: filtersReducer,
  },
});
