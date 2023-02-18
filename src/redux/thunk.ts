import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDataApi, postDataApi } from '../services/api'
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
export const getData = createAsyncThunk(
  'feedbacks/getData',
  async (_, thunkAPI) => {
    try {
      const data = await getDataApi()
      return data
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message)
    }
  }
)
