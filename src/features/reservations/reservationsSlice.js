import { createSlice } from "@reduxjs/toolkit";

// Track saved reservations for the reservations page.
export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: [], 
  reducers: {
    addReservation: (state, action) => {
      const newReservation = {
        ...action.payload,
        id: Date.now(),
      };
      state.push(newReservation);
    },
    deleteReservation: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addReservation, deleteReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;