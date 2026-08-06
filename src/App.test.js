import { render, screen } from "@testing-library/react";
import BookingForm from "./components/ui/BookingForm";
import { initializeTimes } from "./pages/Booking";
import { updateTimes } from "./pages/Booking";
import { Provider } from "react-redux";
import store from "./app/store.js";

describe("Booking Form Tests", () => {

  beforeEach(() => {
    window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00"]);
  });

  afterEach(() => {
    delete window.fetchAPI;
  });

  test("renders the booking form heading", () => {
    render(
      <Provider store={store}>
        <BookingForm  availableTimes={initializeTimes(new Date())} dispatch={() => {}} />
      </Provider>
    );
    const headingElement = screen.getByText(/Book your experience/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("tests the initilializeTimes function", () => {
    const date = new Date();
    expect(initializeTimes(date).length).toBeGreaterThan(0);
  });

  test("tests the updateTimes function", () => {
    const date = new Date();
    const action = { type: "UPDATE_TIMES", date: date };
    const state = initializeTimes(date);
    expect(updateTimes(state, action)).toEqual(state);
  });
});
