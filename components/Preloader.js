import React from 'react';
import styled, { css } from 'styled-components';

const Preloader = ({ loading }) => (
  <Wrapper loaded={!loading}>
    <Spinner />
  </Wrapper>
);

export default Preloader;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: none repeat scroll 0 0 #ffffff;
  transition: opacity 0.5s ease;

  ${({ loaded }) =>
    loaded &&
    css`
      opacity: 0;
      pointer-events: none;
    `};
`;

const Spinner = styled.div`
  border: 1px solid transparent;
  border-radius: 5px;
  position: relative;

  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 45px;
    height: 45px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 1px solid #959595;
    border-top-color: #ffffff;
    animation: spinner 0.9s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
