import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import PageHeader from "../components/common/PageHeader";
import { deleteReservation } from "../features/reservations/reservationsSlice.js";
import QrCode from "../assets/images/qr-code.png";

export default function Reservations() {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteReservation = (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };

  return (
    <div className="reservations-page">
      <div className="reservations-topbar">
        <PageHeader
          eyebrow="Little Lemon"
          title="Your Reservations"
          description="Review the bookings you made and manage your plans with ease."
        />
      </div>

      <div className="reservations-container">
        {reservations?.length === 0 || !reservations ? (
          <div className="reservations-empty-state">
            <h2>No reservations found.</h2>
            <Button
              text="Make a Reservation"
              onClick={() => navigate("/booking")}
            />
          </div>
        ) : (
          <div className="reservations-list-container">
            {reservations.map((reservation, index) => {
              const isLastReservation = index === reservations.length - 1;

              return (
                <div key={reservation.id || index} className="reservation-card">
                  <h2>{reservation.name}</h2>
                  <p><span>Email:</span> {reservation.email}</p>
                  <p><span>Phone:</span> {reservation.phone}</p>
                  <p><span>Date:</span> {reservation.date}</p>
                  <p><span>Time:</span> {reservation.time}</p>
                  <p><span>Guests:</span> {reservation.guests}</p>
                  <p><span>Occasion:</span> {reservation.occasion}</p>
                  <p><span>Requests:</span> {reservation.requests}</p>
                  <img src={QrCode} alt="QR Code" height="150" width="150" />
                  <Button
                    text={isLastReservation ? "Cancel Reservation" : "Another Reservation Exists"}
                    onClick={() => handleDeleteReservation(reservation.id)}
                    disabled={!isLastReservation}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
