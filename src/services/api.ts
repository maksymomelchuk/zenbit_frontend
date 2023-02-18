import axios from 'axios'
import { IFeedback } from '../redux/slice'

axios.defaults.baseURL = 'https://throbbing-surf-7051.fly.dev'

export const postDataApi = async (feedback: IFeedback) => {
  const { data } = await axios.post('/api/feedbacks', feedback)
  return data
}
export const getDataApi = async () => {
  const { data } = await axios.get('/api/feedbacks')
  return data
}
