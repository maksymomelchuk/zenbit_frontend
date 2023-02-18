import React from 'react'
import styled from 'styled-components'
import chart from '../../assets/chart.png'

const StyledImg = styled.img`
  margin-bottom: 5px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: auto;

  @media screen and (min-width: 992px) {
    width: 500px;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`

const Chart: React.FC = () => {
  return <StyledImg src={chart}></StyledImg>
}
export default Chart
