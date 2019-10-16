import styled from 'styled-components';

const H2 = ({ children }) => <StyledH2>{children}</StyledH2>;

export default H2;

const StyledH2 = styled.h2`
  font-weight: 300;
  font-size: 30px;
  line-height: 40px;
  margin-top: 0;
`;
