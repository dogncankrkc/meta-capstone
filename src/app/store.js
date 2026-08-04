import { configureStore } from '@reduxjs/toolkit'
import formSlice from '../features/form/formSlice.js'
import reservationsSlice from '../features/reservations/reservationsSlice.js'

export default configureStore({
  reducer: {
    "form": formSlice,
    "reservations": reservationsSlice,
  },
})