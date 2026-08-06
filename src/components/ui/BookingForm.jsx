import React, { useEffect, useRef } from "react";
import Button from "../common/Button.jsx";
import HeroImage from "../../assets/images/hero-image.jpg";
import { useFormik } from "formik";
import QrCode from "../../assets/images/qr-code.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateForm, resetForm } from "../../features/form/formSlice.js";
import { addReservation } from "../../features/reservations/reservationsSlice.js";

function validateBooking(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (!values.time) {
    errors.time = "Time is required";
  }

  if (!values.occasion) {
    errors.occasion = "Occasion is required";
  }

  const guests = Number(values.guests);
  if (!guests || guests < 1 || guests > 20) {
    errors.guests = "Guests must be between 1 and 20";
  }

  return errors;
}

function isStepComplete(values, step) {
  if (step === 1) {
    return (
      values.name.trim().length > 0 &&
      /^\S+@\S+\.\S+$/.test(values.email) &&
      values.phone.trim().length > 0
    );
  }

  if (step === 2) {
    return (
      Boolean(values.date) && Boolean(values.time) && Boolean(values.occasion)
    );
  }

  if (step === 3) {
    const guests = Number(values.guests);
    return guests >= 1 && guests <= 20;
  }

  return false;
}

export default function BookingForm({ availableTimes, dispatch }) {
  const [steps, setSteps] = React.useState(1);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const initialValues = useSelector((state) => state.form);
  const formDispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validate: validateBooking,
    onSubmit: (values) => {
      const isSuccess =
        typeof window.submitAPI === "function"
          ? window.submitAPI(values)
          : true;

      if (isSuccess) {
        formDispatch(addReservation(values));
        formDispatch(resetForm());
        setIsSubmitted(true);
      } else {
        alert("Failed to submit the reservation. Please try again.");
      }
    },
  });

  useEffect(() => {
    formDispatch(updateForm(formik.values));
  }, [formik.values, formDispatch]);

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-image-container">
          <div className="booking-image-overlay">
            <p className="booking-eyebrow">Little Lemon</p>
            <h1>Reserve your table</h1>
            <p>
              A smoother booking flow with quick steps and clear confirmation.
            </p>
          </div>
          <img src={HeroImage} alt="Booking" className="booking-image" />
        </div>
        {!isSubmitted ? (
          <form className="booking-form" onSubmit={formik.handleSubmit}>
            <div className="booking-form-header">
              <p className="booking-form-kicker" aria-live="polite" role="status">
                Step {steps} of 3
              </p>
              <h2>Book your experience</h2>
              <div className="booking-step-dots" aria-hidden="true">
                <span className={steps >= 1 ? "active" : ""} />
                <span className={steps >= 2 ? "active" : ""} />
                <span className={steps >= 3 ? "active" : ""} />
              </div>
            </div>

            {steps === 1 && (
              <div className="booking-fields">
                <div className="booking-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.name && formik.errors.name ? "error" : ""
                    }
                    aria-invalid={formik.touched.name && Boolean(formik.errors.name)}
                    aria-describedby={formik.touched.name && formik.errors.name ? "name-error" : undefined}
                    required
                    placeholder="Enter your name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span id="name-error" className="booking-error" role="alert">{formik.errors.name}</span>
                  )}
                </div>

                <div className="booking-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.email && formik.errors.email ? "error" : ""
                    }
                    aria-invalid={formik.touched.email && Boolean(formik.errors.email)}
                    aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
                    required
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span id="email-error" className="booking-error" role="alert">{formik.errors.email}</span>
                  )}
                </div>

                <div className="booking-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.phone && formik.errors.phone ? "error" : ""
                    }
                    aria-invalid={formik.touched.phone && Boolean(formik.errors.phone)}
                    aria-describedby={formik.touched.phone && formik.errors.phone ? "phone-error" : undefined}
                    required
                    placeholder="Enter your phone number"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <span id="phone-error" className="booking-error" role="alert">{formik.errors.phone}</span>
                  )}
                </div>
              </div>
            )}

            {steps === 2 && (
              <div className="booking-fields booking-fields-two-column">
                <div className="booking-field">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formik.values.date}
                    onChange={(event) => {
                      formik.handleChange(event);
                      dispatch({
                        type: "UPDATE_TIMES",
                        date: event.target.value,
                      });
                    }}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.date && formik.errors.date ? "error" : ""
                    }
                    aria-invalid={formik.touched.date && Boolean(formik.errors.date)}
                    aria-describedby={formik.touched.date && formik.errors.date ? "date-error" : undefined}
                    required
                  />
                  {formik.touched.date && formik.errors.date && (
                    <span id="date-error" className="booking-error" role="alert">{formik.errors.date}</span>
                  )}
                </div>

                <div className="booking-field">
                  <label htmlFor="time">Time</label>
                  <select
                    id="time"
                    name="time"
                    aria-label="Select a time for your reservation"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.time && formik.errors.time ? "error" : ""
                    }
                    aria-invalid={formik.touched.time && Boolean(formik.errors.time)}
                    aria-describedby={formik.touched.time && formik.errors.time ? "time-error" : undefined}
                    required
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  {formik.touched.time && formik.errors.time && (
                    <span id="time-error" className="booking-error" role="alert">{formik.errors.time}</span>
                  )}
                </div>

                <div className="booking-field booking-field-inline">
                  <label htmlFor="occasion">Occasion</label>
                  <select
                    id="occasion"
                    name="occasion"
                    aria-label="Select an occasion for your reservation"
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.occasion && formik.errors.occasion
                        ? "error"
                        : ""
                    }
                    aria-invalid={formik.touched.occasion && Boolean(formik.errors.occasion)}
                    aria-describedby={formik.touched.occasion && formik.errors.occasion ? "occasion-error" : undefined}
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                  {formik.touched.occasion && formik.errors.occasion && (
                    <span id="occasion-error" className="booking-error" role="alert">
                      {formik.errors.occasion}
                    </span>
                  )}
                </div>
              </div>
            )}

            {steps === 3 && (
              <div className="booking-fields">
                <div className="booking-field booking-field-inline">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    min="1"
                    max="20"
                    className={
                      formik.touched.guests && formik.errors.guests
                        ? "error"
                        : ""
                    }
                    aria-invalid={formik.touched.guests && Boolean(formik.errors.guests)}
                    aria-describedby={formik.touched.guests && formik.errors.guests ? "guests-error" : undefined}
                    required
                  />
                  {formik.touched.guests && formik.errors.guests && (
                    <span id="guests-error" className="booking-error" role="alert">
                      {formik.errors.guests}
                    </span>
                  )}
                </div>

                <div className="booking-field">
                  <label htmlFor="requests">Special Requests</label>
                  <textarea
                    id="requests"
                    name="requests"
                    value={formik.values.requests}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Anything we should know about your reservation?"
                  ></textarea>
                </div>
              </div>
            )}

            <div className="booking-form-buttons">
              {steps > 1 && (
                <Button
                  type="button"
                  onClick={() => setSteps((currentStep) => currentStep - 1)}
                  aria-label="Go to the previous step"
                >
                  Previous
                </Button>
              )}
              {steps < 3 && (
                <Button
                  type="button"
                  onClick={() => setSteps((currentStep) => currentStep + 1)}
                  disabled={!isStepComplete(formik.values, steps)}
                  aria-label="Go to the next step"
                >
                  Next
                </Button>
              )}
            </div>

            {steps === 3 && (
              <Button
                className="booking-submit"
                type="submit"
                role="button"
                disabled={!isStepComplete(formik.values, steps)}
              >
                Make Your Reservation
              </Button>
            )}
          </form>
        ) : (
          <div className="booking-confirmation">
            <h2>Thank you for your reservation!</h2>
            <p>We look forward to welcoming you at Little Lemon.</p>
            <img src={QrCode} alt="QR Code" />
            <span>
              Show this QR code before entering the restaurant <br /> to enjoy
              your dinner!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
