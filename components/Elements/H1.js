import styled from 'styled-components';

const H1 = ({ children }) => <StyledH1>{children}</StyledH1>;

export default H1;

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 200;
  line-height: 50px;
`;
