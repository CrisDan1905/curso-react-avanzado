import styled from 'styled-components'

export const Button = styled.button`
  background: #dd6b40;;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;

  &[disabled] {
    opacity: .3;
  }
`
