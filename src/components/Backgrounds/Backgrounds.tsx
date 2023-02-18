import React from 'react'
import {
  StyledBgTopLeft,
  StyledLightYellowCircle,
  StyledLightYellowCircleBig,
  StyledPinkTop,
  StyledPinkBottom,
  StyledShadowLeft,
  StyledShadowMiddle,
  StyledShadowRight,
} from './Backgrounds.styled'

const Backgrounds: React.FC = () => {
  return (
    <>
      <StyledBgTopLeft />
      <StyledLightYellowCircle />
      <StyledPinkTop />
      <StyledLightYellowCircleBig />
      <StyledPinkBottom />
      <StyledShadowLeft />
      <StyledShadowMiddle />
      <StyledShadowRight />
    </>
  )
}
export default Backgrounds
