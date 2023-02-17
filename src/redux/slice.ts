import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postData } from './thunk'

export interface IFeedback {
  name: string
  email: string
  text: string
}

interface IInitialState {
  feedbacks: IFeedback[]
  searchValue: string
  isSending: boolean
  error: null | string
}

const initialState: IInitialState = {
  feedbacks: [],
  searchValue: '',
  isSending: false,
  error: null,
}

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.isSending = true
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.isSending = false
        state.feedbacks.push(action.payload)
      })
      .addCase(postData.rejected, (state, action) => {
        state.isSending = false
        // state.error = action.payload
      })
  },
})

export const feedbacksReducer = feedbacksSlice.reducer
