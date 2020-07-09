import styled, { keyframes } from 'styled-components'

const tileload = keyframes `
from{
  opacity: 0;
  left: -30px;
}
to{
  opacity: 1;
  left: 0px;
}
`;
export const StyledTile = styled.div `
  position: relative;
  opacity: 0;
  animation: ${tileload} 1s cubic-bezier(0.42, 0.0, 0.58, 1.0);
  animation-delay: ${props => props.delay};
  animation-fill-mode: forwards;
  transition: transform 0.5s;
`;
