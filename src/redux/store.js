import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./auth/authSlice";
import teacherReducers from "./teachers/teachersSlice";
export const store = configureStore({

  reducer: {
    users: usersReducer,
    teachers: teacherReducers,
  },
});
