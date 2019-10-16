import styled from 'styled-components';

const P = ({ children }) => <StyledP>{children}</StyledP>;

export default P;

const StyledP = styled.p`
  color: #757575;
  font-size: 16px;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0.5px;
`;
