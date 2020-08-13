import styled from 'styled-components'

export const P = styled.p`
  font-family: ${props => props.family ? props.family : 'Open Sans, sans-serif'};
  font-size: ${props => props.size ? props.size : '0.8rem'};
`;