import React from 'react'
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
  StyledTextInput,
} from './Form.styled'
import { postData } from '../../redux/thunk'
import { useAppDispatch } from '../../redux/store'

const Form: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    const { name, email, text } = event.target
    dispatch(
      postData({
        name: name.value,
        email: email.value,
        text: text.value,
      })
    )
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel className="animate__animated animate__slideInLeft animate__delay-1s">
        Reach out to us!
      </StyledLabel>
      <StyledInput name="name" type="text" placeholder="Your name*" required />
      <StyledInput
        name="email"
        type="email"
        placeholder="Your e-mail*"
        required
      />
      <StyledTextInput name="text" placeholder="Your message*" required />
      <StyledButton type="submit">Send message</StyledButton>
    </StyledForm>
  )
}
export default Form
