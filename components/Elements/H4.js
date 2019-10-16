import styled from 'styled-components';

const H4 = ({ children }) => <StyledH4>{children}</StyledH4>;

export default H4;

const StyledH4 = styled.h4`
  font-weight: 300;
  color: #505050;
  font-size: 18px;
  line-height: 28px;
`;
