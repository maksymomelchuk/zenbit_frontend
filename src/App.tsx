import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Backgrounds from './components/Backgrounds/Backgrounds'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Chart from './components/Chart/Chart'
import { StyledMainSection, StyledContainer } from './App.styled'
import { useAppDispatch } from './redux/store'
import { getData } from './redux/thunk'
import { useAppSelector } from './redux/store'
import { selectFeedbacks } from './redux/selectors'

const toastId = 'feedbacks'

const App: React.FC = () => {
  const feedbacks = useAppSelector(selectFeedbacks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  useEffect(() => {
    if (feedbacks.length > 0) {
      notify(feedbacks.length)
    }
  }, [feedbacks])

  const notify = (qty: number) =>
    toast(`In database were found ${qty} feedbacks`, {
      toastId,
    })

  return (
    <>
      <StyledContainer>
        <StyledMainSection>
          <Form />
          <Chart />
        </StyledMainSection>
        <Footer />
        <Backgrounds />
      </StyledContainer>
      <ToastContainer />
    </>
  )
}
export default App
