import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./components/ui/BookingForm";
import { initializeTimes, updateTimes } from "./pages/Booking";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/form/formSlice";
import reservationsReducer from "./features/reservations/reservationsSlice";

const createMockStore = () => {
  return configureStore({
    reducer: {
      form: formReducer,
      reservations: reservationsReducer,
    },
  });
};

const renderBookingForm = () => {
  const defaultProps = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00"],
    dispatch: jest.fn(),
  };

  return render(
    <Provider store={createMockStore()}>
      <BookingForm {...defaultProps} />
    </Provider>,
  );
};
describe("Booking Form", () => {
  describe("Initialization", () => {
    beforeEach(() => {
      window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00"]);
    });

    afterEach(() => {
      delete window.fetchAPI;
    });

    test("renders the booking form heading", () => {
      renderBookingForm();
      const headingElement = screen.getByText(/Book your experience/i);
      expect(headingElement).toBeInTheDocument();
    });

    test("tests the initializeTimes function", () => {
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

  describe("Form Validation and User Experience", () => {
    test("Step 1: HTML5 Attributes Verification across all steps and submission", async () => {
      renderBookingForm();

      const nameInput = screen.getByLabelText(/Name/i);
      expect(nameInput).toHaveAttribute("type", "text");
      expect(nameInput).toHaveAttribute("required");

      const emailInput = screen.getByLabelText(/Email/i);
      expect(emailInput).toHaveAttribute("type", "email");
      expect(emailInput).toHaveAttribute("required");

      const phoneInput = screen.getByLabelText(/Phone/i);
      expect(phoneInput).toHaveAttribute("type", "tel");
      expect(phoneInput).toHaveAttribute("required");

      fireEvent.change(nameInput, {
        target: { name: "name", value: "John Doe" },
      });
      fireEvent.change(emailInput, {
        target: { name: "email", value: "john@example.com" },
      });
      fireEvent.change(phoneInput, {
        target: { name: "phone", value: "1234567890" },
      });

      fireEvent.click(screen.getByRole("button", { name: /Next/i }));

      await waitFor(() => {
        expect(screen.getByText(/Step 2 of 3/i)).toBeInTheDocument();
      });

      const dateInput = screen.getByLabelText(/Date/i);
      expect(dateInput).toHaveAttribute("type", "date");
      expect(dateInput).toHaveAttribute("required");

      const timeSelect = screen.getByLabelText(/Time/i);
      expect(timeSelect).toHaveAttribute("required");

      fireEvent.change(dateInput, {
        target: { name: "date", value: "2026-08-07" },
      });
      fireEvent.change(timeSelect, {
        target: { name: "time", value: "19:00" },
      });
      const occasionSelect = screen.getByLabelText(/Occasion/i);
      fireEvent.change(occasionSelect, {
        target: { name: "occasion", value: "birthday" },
      });

      fireEvent.click(screen.getByRole("button", { name: /Next/i }));

      await waitFor(() => {
        expect(screen.getByText(/Step 3 of 3/i)).toBeInTheDocument();
      });

      const guestsInput = screen.getByLabelText(/Number of Guests/i);
      expect(guestsInput).toHaveAttribute("type", "number");
      expect(guestsInput).toHaveAttribute("min", "1");
      expect(guestsInput).toHaveAttribute("max", "20");
      expect(guestsInput).toHaveAttribute("required");

      const requestsInput = screen.getByLabelText(/Special Requests/i);
      expect(requestsInput).toHaveAttribute("name", "requests");
      expect(requestsInput).toHaveAttribute("id", "requests");

      fireEvent.change(guestsInput, {
        target: { name: "guests", value: "4" },
      });
      fireEvent.change(requestsInput, {
        target: { name: "requests", value: "Window seat, please." },
      });

      const submitButton = screen.getByRole("button", {
        name: /Make Your Reservation/i,
      });
      expect(submitButton).not.toBeDisabled();

      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/Thank you for your reservation!/i)).toBeInTheDocument();
      });
    });

    test("Step 2: Shows JS validation error and disables Next button for invalid states", async () => {
      renderBookingForm();

      const emailInput = screen.getByLabelText(/Email/i);
      const nextButton = screen.getByRole("button", { name: /Next/i });

      expect(nextButton).toBeDisabled();

      fireEvent.change(emailInput, {
        target: { name: "email", value: "invalid-email" },
      });
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(
          screen.getByText(/Enter a valid email address/i),
        ).toBeInTheDocument();
      });

      expect(nextButton).toBeDisabled();
    });

    test("Step 2: Clears validation errors and enables progression for valid states", async () => {
      renderBookingForm();

      const nameInput = screen.getByLabelText(/Name/i);
      const emailInput = screen.getByLabelText(/Email/i);
      const phoneInput = screen.getByLabelText(/Phone/i);
      const nextButton = screen.getByRole("button", { name: /Next/i });

      fireEvent.change(nameInput, {
        target: { name: "name", value: "John Doe" },
      });
      fireEvent.change(emailInput, {
        target: { name: "email", value: "john@example.com" },
      });
      fireEvent.change(phoneInput, {
        target: { name: "phone", value: "1234567890" },
      });
      fireEvent.blur(phoneInput);

      await waitFor(() => {
        expect(nextButton).not.toBeDisabled();
      });

      expect(
        screen.queryByText(/Enter a valid email address/i),
      ).not.toBeInTheDocument();
      expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
    });

    test("shows accessible validation state for invalid form fields", async () => {
      renderBookingForm();

      const emailInput = screen.getByLabelText(/Email/i);

      fireEvent.change(emailInput, {
        target: { name: "email", value: "invalid-email" },
      });
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(emailInput).toHaveAttribute("aria-invalid", "true");
      });

      expect(emailInput).toHaveAttribute("aria-describedby");
    });
  });
});
