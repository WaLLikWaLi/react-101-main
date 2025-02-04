import { createSlice } from "@reduxjs/toolkit";
import { doRegister, doLogOut, doLogIn, doRefreshUser } from "./authOps";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    selectUserData(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(doLogIn.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(doLogIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.email = action.payload.email;
        state.token = action.payload.uid;
        console.log(action.payload.email);
      })
      .addCase(doLogIn.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(doRegister.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(doRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(doRegister.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(doLogOut.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(doLogOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        console.log("LOG OUT");
        
      })
      .addCase(doLogOut.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(doRefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(doRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

const usersReducer = usersSlice.reducer;
export const { selectUserData } = usersSlice.actions;
export default usersReducer;
export const selectUser = (state) => state.users.user;
export const selectIsLoggedIn = (state) => state.users.isLoggedIn;
export const selectIsRefreshing = (state) => state.users.isRefreshing;
export const selectToken = (state) => state.users.token;
