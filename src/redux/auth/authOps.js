import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const doRegister = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );
      console.log(response.user);

      return {
        uid: response.user.uid,
        email: response.user.email,
        name: registerData.name,
        emailVerified: response.user.emailVerified,
      };
    } catch (error) {
      console.error("Error during registration:", error.message);
      return thunkAPI.rejectWithValue({
        code: error.code,
        message: error.message,
      });
    }
  }
);

export const doLogIn = createAsyncThunk(
  "auth/logIn",
  async (logInData, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        logInData.email,
        logInData.password
      );

      const idToken = await response.user.getIdToken();

      return {
        uid: response.user.uid,
        email: response.user.email,
        emailVerified: response.user.emailVerified,
        idToken,
      };
    } catch (error) {
      console.error("Login error:", error.message);
      return thunkAPI.rejectWithValue({
        code: error.code,
        message: error.message,
      });
    }
  }
);

export const doLogOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const doRefreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (user) {
        return {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          displayName: user.displayName,
        };
      } else {
        return thunkAPI.rejectWithValue("User is not logged in");
      }
    } catch (error) {
      console.error("Error during user refresh:", error.message);
      return thunkAPI.rejectWithValue({
        code: error.code,
        message: error.message,
      });
    }
  }
);
