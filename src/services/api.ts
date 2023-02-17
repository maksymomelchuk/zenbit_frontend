import axios from 'axios'
import { IFeedback } from '../redux/slice'

axios.defaults.baseURL = 'https://autumn-water-1341.fly.dev'

export const postDataApi = async (feedback: IFeedback) => {
  const { data } = await axios.post('/api/feedbacks', feedback)
  return data
}
