import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/Home'
import BookingPage from './pages/Booking'
import ReservationsPage from './pages/Reservations'

// Define the main routes for the restaurant experience.
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/booking", element: <BookingPage /> },
            { path: "/reservations", element: <ReservationsPage /> }
        ]
    }
])