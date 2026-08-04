import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    requests: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: (state) => {
      return { ...initialState };
    }
  },
});

export const { updateForm, resetForm } = formSlice.actions;

export default formSlice.reducer;
