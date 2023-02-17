import { configureStore } from '@reduxjs/toolkit'
import { feedbacksReducer } from './slice'

export const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
  },
})
