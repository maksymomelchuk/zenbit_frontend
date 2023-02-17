import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 8px;
  padding: 155px 104px 174px 147px;
`
export const StyledButton = styled.button`
  align-self: flex-start;

  padding: 27px 52px;
  margin-top: 15px;
  background-color: #fad34f;

  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: #fff;

  cursor: pointer;
  border: none;
  border-radius: 500px;
`
export const StyledLabel = styled.label`
  font-size: 40px;
  line-height: 1.3;
  color: #3e3e3e;
  margin-bottom: 22px;
`
export const StyledInput = styled.input`
  padding: 30px 46px;

  color: #2d2d2d;
  font-size: 18px;
  line-height: 1.8;

  border: 1px solid #dcdcdc;
  border-radius: 10px;

  &::placeholder {
    color: #2d2d2d;
  }
  &:focus {
    outline: none;
  }
`
export const StyledTextInput = styled.textarea`
  padding: 30px 46px 126px;
  resize: none;

  color: #2d2d2d;
  font-size: 18px;
  line-height: 1.8;

  border: 1px solid #dcdcdc;
  border-radius: 10px;

  &::placeholder {
    color: #2d2d2d;
  }
  &:focus {
    outline: none;
  }
`
