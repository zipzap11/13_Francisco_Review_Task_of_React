import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  fullName: "",
  email: "",
  phoneNumber: "",
  nationality: "",
  message: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    formData: initialValue,
  },
  reducers: {
    addFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { addFormData } = todoSlice.actions;
export default todoSlice;
