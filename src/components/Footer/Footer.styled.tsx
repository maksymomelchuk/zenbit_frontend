import styled from 'styled-components'
import green from '../../assets/green.svg'
import yellow from '../../assets/yellow_s.svg'

export const StyledList = styled.ul`
  display: flex;
  gap: 26px;
  color: #696969;

  padding: 79px 50px 105px 50px;

  @media screen and (min-width: 768px) {
    padding: 80px 75px 105px 155px;
  }
  @media screen and (min-width: 992px) {
    padding: 80px 75px 105px 343px;
  }

  & li {
    transition: transform 250ms linear;
    &:hover {
      transform: scale(1.3);
    }
  }
`
export const StyledFooter = styled.footer`
  background-color: #fafafa;
  border: 1px solid #d8d8d8;
  position: relative;
`
export const StyledGreen = styled.div`
  position: absolute;

  background-image: url('${green}');
  width: 79px;
  height: 97px;

  top: 0px;
  right: 20px;
  @media screen and (min-width: 768px) {
    right: 127px;
  }
`
export const StyledYellow = styled.div`
  position: absolute;

  background-image: url('${yellow}');
  width: 122px;
  height: 122px;

  bottom: 0px;
  right: -45px;
  @media screen and (min-width: 768px) {
    bottom: 28px;
  }
`
