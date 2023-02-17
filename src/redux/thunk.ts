import { createAsyncThunk } from '@reduxjs/toolkit'
import { postDataApi } from '../services/api'
import { IFeedback } from './slice'

export const postData = createAsyncThunk(
  'feedbacks/postData',
  async (feedback: IFeedback, thunkAPI) => {
    try {
      const data = await postDataApi(feedback)
      return data
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message)
    }
  }
)
