import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers, addTeacher } from "./teachersOps";

const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    status: "idle",
    error: null,
    lastLoadedKey: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers.push(action.payload);
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTeachers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers = state.teachers.concat(action.payload);
        if (action.payload.length > 0) {
          state.lastLoadedKey = action.payload[action.payload.length - 1].id;
        }
        
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
const teacherReducers = teacherSlice.reducer;
export default teacherReducers;
