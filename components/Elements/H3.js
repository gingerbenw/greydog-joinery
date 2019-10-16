import styled from 'styled-components';

const H3 = ({ children }) => <StyledH3>{children}</StyledH3>;

export default H3;

const StyledH3 = styled.h3`
  font-weight: 300;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`;
