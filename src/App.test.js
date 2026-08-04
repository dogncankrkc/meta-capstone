import { render, screen } from "@testing-library/react";
import BookingForm from "./components/ui/BookingForm";
import { initializeTimes } from "./pages/Booking";
import { updateTimes } from "./pages/Booking";

describe("Booking Form Tests", () => {
  test("renders the booking form heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Book your experience/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("tests the initilializeTimes function", () => {
    const date = new Date();
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes(date)).toEqual(times);
  });

  test("tests the updateTimes function", () => {
    const date = new Date();
    const action = { type: "UPDATE_TIMES", date: date };
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(updateTimes(state, action)).toEqual(state);
  });
});
