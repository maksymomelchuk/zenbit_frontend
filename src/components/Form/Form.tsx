import React from 'react'
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
  StyledTextInput,
} from './Form.styled'
import { postData } from '../../redux/thunk'
import { useDispatch } from 'react-redux'
import { postDataApi } from '../../services/api'

const Form: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    const { name, email, text } = event.target
    ;(async () => {
      const data = await postDataApi({
        name: name.value,
        email: email.value,
        text: text.value,
      })
      console.log('data', data)
    })()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Reach out to us!</StyledLabel>
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
