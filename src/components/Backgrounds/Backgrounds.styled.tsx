import styled from 'styled-components'
import yellow_s from '../../assets/yellow_s.svg'
import yellow_b from '../../assets/yellow_b.svg'
import pink from '../../assets/pink.svg'

export const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${yellow_s}), url(${yellow_b}), url(${pink});
  background-position: top 23px left 29px, top 516px left 763px,
    top 558px left 762px;
  background-repeat: no-repeat;

  background-size: 122px, 127px, 299px;
`
export const StyledLightYellowCircle = styled.span`
  display: block;

  position: absolute;
  top: 21px;
  left: 714px;

  width: 87px;
  height: 87px;
  border-radius: 50%;

  background-color: #fffbef;
`
