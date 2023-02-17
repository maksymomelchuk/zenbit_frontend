import styled from 'styled-components'

export const StyledMainSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  position: relative;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`

export const StyledContainer = styled.div`
  position: relative;
  margin: 0px auto;

  @media screen and (min-width: 1000px) {
    width: 1000px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`
