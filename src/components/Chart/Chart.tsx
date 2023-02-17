import React from 'react'
import styled from 'styled-components'
import chart from '../../assets/chart.png'

const StyledImg = styled.img`
  margin-bottom: 5px;
  align-self: flex-end;

  @media screen and (min-width: 1000px) {
    transform: scale(0.7);
  }
  @media screen and (min-width: 1440px) {
    transform: scale(1);
  }
`

const Chart: React.FC = () => {
  return <StyledImg src={chart}></StyledImg>
}
export default Chart
