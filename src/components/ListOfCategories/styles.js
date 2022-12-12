import styled, { keyframes, css } from 'styled-components'

const slideDownKeyframes = keyframes`
  from {
    top: -40px;
    opacity: 0;
  }

  to {
    top: -20px;
    opacity: 1;
  }
`

export const slideDown = ({ time = '200ms', type = 'ease' } = {}) =>
  css`animation: ${time} ${slideDownKeyframes} ${type}`

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    ${slideDown()}`}
`

export const Item = styled.li`
  padding: 0 8px;
`
