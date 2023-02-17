import axios from 'axios'
import { IFeedback } from '../redux/slice'

axios.defaults.baseURL = 'https://purple-breeze-7232.fly.dev'

export const postDataApi = async (feedback: IFeedback) => {
  console.log('feedback', feedback)
  const { data } = await axios.post('/api/feedbacks', feedback)
  console.log('data', data)
  return data
}
