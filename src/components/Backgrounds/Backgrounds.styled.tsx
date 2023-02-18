import styled from 'styled-components'
import yellow_s from '../../assets/yellow_s.svg'
import yellow_b from '../../assets/yellow_b.svg'
import pink from '../../assets/pink.svg'
import shadow from '../../assets/shadow.svg'

export const StyledBgTopLeft = styled.div`
  position: absolute;

  background-image: url('${yellow_s}');
  width: 122px;
  height: 122px;

  top: 15px;
  right: 29px;
  @media screen and (min-width: 768px) {
    top: 23px;
    left: 29px;
  }
  @media screen and (min-width: 992px) {
    top: 29px;
    left: 340px;
  }
  @media screen and (min-width: 1200px) {
    top: 23px;
    left: 29px;
  }
`
export const StyledLightYellowCircleBig = styled.div`
  position: absolute;

  background-image: url('${yellow_b}');
  width: 80px;
  height: 80px;
  background-size: cover;

  bottom: 23%;
  left: 4%;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    bottom: 23%;
    left: 5%;
  }
  @media screen and (min-width: 992px) {
    bottom: 35%;
    left: 57%;
  }
  @media screen and (min-width: 1200px) {
    width: 127px;
    height: 127px;
    top: 516px;
    left: 45%;
  }
  @media screen and (min-width: 1300px) {
    width: 127px;
    height: 127px;
    top: 516px;
    left: 51%;
  }
`
export const StyledPinkTop = styled.div`
  position: absolute;

  background-image: url('${pink}');
  width: 180px;
  height: 180px;
  background-size: cover;

  bottom: 16.5%;
  left: 6%;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    left: 5%;
  }
  @media screen and (min-width: 992px) {
    bottom: 22%;
    left: 59%;
  }
  @media screen and (min-width: 1200px) {
    width: 299px;
    height: 299px;
    top: 558px;
    left: 45%;
  }
  @media screen and (min-width: 1300px) {
    top: 558px;
    left: 51%;
  }
`
export const StyledPinkBottom = styled.div`
  position: absolute;

  background-image: url('${pink}');
  width: 180px;
  height: 180px;
  background-size: cover;

  @media screen and (min-width: 768px) {
    bottom: -40px;
    left: -40px;
    width: 220px;
    height: 220px;
  }
  @media screen and (min-width: 992px) {
    left: 15px;
  }
  @media screen and (min-width: 1200px) {
    width: 299px;
    height: 299px;
    left: 15px;
    bottom: -60px;
  }
`
export const StyledLightYellowCircle = styled.span`
  display: none;

  position: absolute;
  top: 21px;
  left: 714px;

  width: 87px;
  height: 87px;
  border-radius: 50%;

  background-color: #fffbef;

  @media screen and (min-width: 768px) {
    display: block;
    top: 120px;
    left: 600px;
  }
  @media screen and (min-width: 992px) {
    top: 21px;
    left: 50%;
  }
  @media screen and (min-width: 1400px) {
    top: 21px;
    left: 714px;
  }
`
export const StyledShadowLeft = styled.div`
  position: absolute;
  z-index: -1;

  background-image: url('${shadow}');
  width: 219px;
  height: 165px;

  top: 15px;
  left: 29px;
  @media screen and (min-width: 768px) {
    top: 400px;
    left: -90px;
  }
  @media screen and (min-width: 992px) {
    top: 29px;
    left: 0px;
  }
  @media screen and (min-width: 1200px) {
    top: 400px;
    left: -90px;
  }
`
export const StyledShadowMiddle = styled.div`
  position: absolute;
  z-index: -1;

  background-image: url('${shadow}');
  width: 219px;
  height: 165px;

  top: 500px;
  right: -60px;
  @media screen and (min-width: 768px) {
    top: 630px;
    left: 40%;
  }
  @media screen and (min-width: 992px) {
    top: 580px;
    left: 20%;
  }
  @media screen and (min-width: 1200px) {
    top: 626px;
    left: 343px;
  }
`
export const StyledShadowRight = styled.div`
  position: absolute;
  z-index: -1;

  background-image: url('${shadow}');
  width: 219px;
  height: 165px;

  top: 700px;
  left: 0px;
  @media screen and (min-width: 768px) {
    top: 900px;
    left: 18%;
  }
  @media screen and (min-width: 992px) {
    top: 153px;
    left: 48%;
  }
`
