import React from 'react'
import Backgrounds from './components/Backgrounds/Backgrounds'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Chart from './components/Chart/Chart'
import { StyledMainSection, StyledContainer } from './App.styled'

const App: React.FC = () => {
  return (
    <StyledContainer>
      <StyledMainSection>
        <Form />
        <Chart />
        {/* <Backgrounds /> */}
      </StyledMainSection>
      <Footer />
    </StyledContainer>
  )
}
export default App
