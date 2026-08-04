import React from "react";
import BookingForm from "../components/ui/BookingForm";
import { useReducer } from "react";

export const initializeTimes = (date) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(action.date);
    default:
      return state;
  }
};

export default function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}
