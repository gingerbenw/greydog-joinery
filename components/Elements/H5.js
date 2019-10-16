import styled from 'styled-components';

const H5 = ({ children }) => <StyledH5>{children}</StyledH5>;

export default H5;

const StyledH5 = styled.h5`
  font-weight: 300;
`;
