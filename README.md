# Little Lemon Capstone

A responsive React restaurant website built for the Meta Front-End capstone project.

## Features

- Responsive header with desktop navigation and a mobile drawer
- Home page with hero, specials, testimonials, and about sections
- Booking page with Formik validation and step-based navigation
- Responsive specials grid and testimonial cards
- Shared layout with React Router

## Tech Stack

- React 19
- React Router DOM
- Formik
- Font Awesome
- CSS3

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
  assets/
    images/
  components/
    common/
    layout/
    ui/
  data/
  pages/
  routes.jsx
```

## Notes

- Testimonial avatars are expected under `public/avatars`.
- Booking uses mock data and alert-based submission for now.
