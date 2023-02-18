import { RootState } from './store'

export const selectFeedbacks = (state: RootState) => state.feedbacks.feedbacks
