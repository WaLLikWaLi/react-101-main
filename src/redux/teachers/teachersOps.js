import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ref,
  push,
  set,
  query,
  orderByKey,
  limitToFirst,
  get,
  startAfter,
} from "firebase/database";
import { db } from "../../../firebase";

export const addTeacher = createAsyncThunk(
  "teachers/addTeacher",
  async (teacherData, thunkAPI) => {
    try {
      const teacherRef = ref(db, "teachers");
      const newTeacherRef = push(teacherRef);

      await set(newTeacherRef, teacherData);

      return { id: newTeacherRef.key, ...teacherData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async ({ startAfterKey = "", limit = 4 }, thunkAPI) => {
    try {
      const teachersRef = ref(db, "teachers");
      let teachersQuery;


      if (startAfterKey) {
        
        teachersQuery = query(
          teachersRef,
          orderByKey(),
          startAfter(startAfterKey),
          limitToFirst(limit)
        );
      } else {
        teachersQuery = query(teachersRef, orderByKey(), limitToFirst(limit));
      }

      const snapshot = await get(teachersQuery);

      if (snapshot.exists()) {
        const teachersData = snapshot.val();

        const teachersArray = Object.entries(teachersData).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );

        return teachersArray;
      } else {
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
