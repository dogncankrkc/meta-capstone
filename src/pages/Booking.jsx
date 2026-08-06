import React from "react";
import BookingForm from "../components/ui/BookingForm";
import { useReducer } from "react";

export const initializeTimes = (date) => {
  const validDate = date instanceof Date && !isNaN(date) ? date : new Date();

  if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
    return window.fetchAPI(validDate);
  }

  return [];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = action.date ? new Date(action.date) : new Date();
      return initializeTimes(selectedDate);
    default:
      return state;
  }
};

export default function Booking() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    new Date(),
    initializeTimes,
  );

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}
