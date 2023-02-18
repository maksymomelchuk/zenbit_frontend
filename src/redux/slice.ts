import { createSlice } from '@reduxjs/toolkit'
import { postData, getData } from './thunk'

export interface IFeedback {
  name: string
  email: string
  text: string
}

interface IInitialState {
  feedbacks: IFeedback[]
  isLoading: boolean
  error: null | string
}

const initialState: IInitialState = {
  feedbacks: [],
  isLoading: false,
  error: null,
}

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // POST DATA
      .addCase(postData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.isLoading = false
        state.feedbacks.push(action.payload)
        console.log(action.payload)
      })
      .addCase(postData.rejected, (state) => {
        state.isLoading = false
      })
      // GET DATA
      .addCase(getData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false
        state.feedbacks = action.payload
      })
      .addCase(getData.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const feedbacksReducer = feedbacksSlice.reducer
