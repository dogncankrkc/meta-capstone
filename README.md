# Little Lemon Capstone

A responsive React restaurant website built for the Meta Front-End capstone project. The app combines a polished restaurant landing experience with a guided reservation flow and a reservation management view.

## Features

- Responsive header with desktop navigation and a mobile drawer
- Home page with hero, specials, testimonials, and about sections
- Booking page with Formik validation, step-based navigation, and confirmation state
- Reservations page to review and manage saved bookings
- Reusable page header section for key pages such as Reservations and Reserve a Table
- Accessibility improvements including clearer alt text, validation messaging, and focus-visible styles

## Tech Stack

- React 19
- React Router DOM
- Redux Toolkit
- Formik
- Font Awesome
- CSS3
- Jest and Testing Library

## Setup

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Scripts

- `npm start` - run the app in development mode
- `npm test` - run tests
- `npm run build` - create a production build

## Project Structure

```text
src/
  app/
    store.js
  assets/
    images/
  components/
    common/
    layout/
    ui/
  data/
    content.js
  features/
    form/
    reservations/
  pages/
    Booking.jsx
    Home.jsx
    Reservations.jsx
  routes.jsx
```

## Notes

- Booking data is managed with Redux and stored in the app state during the flow.
- Accessibility updates include semantic form labeling, ARIA-based validation feedback, and stronger keyboard focus styling.
