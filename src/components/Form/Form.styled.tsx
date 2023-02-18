import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 8px;
  padding: 50px 30px;

  @media screen and (min-width: 768px) {
    padding: 155px 147px;
  }
  @media screen and (min-width: 992px) {
    padding: 100px 30px 100px 30px;
  }
  @media screen and (min-width: 1200px) {
    padding: 179px 104px 174px 147px;
  }
`
export const StyledButton = styled.button`
  align-self: center;

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

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }

  transition: all 250ms linear;

  &:hover,
  &:focus {
    opacity: 0.8;
    color: #5f83aa;
  }
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
