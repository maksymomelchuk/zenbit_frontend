import React from 'react'
import {
  FaPinterestP,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa'
import { StyledList, StyledFooter } from './Footer.styled'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledList>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/zenbit-tech/"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/?lang=ru"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/zenBitTech/"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://pinterest.com"
          >
            <FaPinterestP />
          </a>
        </li>
      </StyledList>
    </StyledFooter>
  )
}
export default Footer
