import styled from 'styled-components';

const Button = ({ children }) => (
  <StyledButton>
    <span>{children}</span>
  </StyledButton>
);

export default Button;

const StyledButton = styled.button`
  line-height: 45px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  color: #ffffff;
  font-weight: normal;

  span {
    position: relative;
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0.5px;
    padding: 0 25px;
    background: #aaa;
    border-radius: 1px;
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;

    &:before {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000000;
      border-radius: 1px;
      color: #ffffff;
      padding: 0 25px;
      content: attr(data-hover);
      -webkit-transition: background 0.3s;
      -moz-transition: background 0.3s;
      transition: background 0.3s;
      -webkit-transform: rotateX(-90deg);
      -moz-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
      -webkit-transform-origin: 50% 0;
      -moz-transform-origin: 50% 0;
      transform-origin: 50% 0;
    }
  }

  &:hover {
    span {
      -webkit-transform: rotateX(90deg) translateY(-22px);
      -moz-transform: rotateX(90deg) translateY(-22px);
      transform: rotateX(90deg) translateY(-22px);

      &:before {
        background: #000000;
      }
    }
  }
`;

/*---------------------------------------
  BUTTONS               
-----------------------------------------*/

// .section-btn {
//   margin: 32px 0 0 0;
//   padding: 0;
// }

// .section-btn a,
// .section-btn button {
//   line-height: 45px;
//   -webkit-perspective: 1000px;
//   -moz-perspective: 1000px;
//   perspective: 1000px;
//   color: #ffffff;
//   font-weight: normal;
// }

// .section-btn a span,
// .section-btn button span {
//   position: relative;
//   display: inline-block;
//   font-size: 18px;
//   font-weight: normal;
//   letter-spacing: 0.5px;
//   padding: 0 25px;
//   background: #aaa;
//   border-radius: 1px;
//   -webkit-transition: -webkit-transform 0.3s;
//   -moz-transition: -moz-transform 0.3s;
//   transition: transform 0.3s;
//   -webkit-transform-origin: 50% 0;
//   -moz-transform-origin: 50% 0;
//   transform-origin: 50% 0;
//   -webkit-transform-style: preserve-3d;
//   -moz-transform-style: preserve-3d;
//   transform-style: preserve-3d;
// }

// .csstransforms3d .section-btn a span::before,
// .csstransforms3d .section-btn button span::before {
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #000000;
//   border-radius: 1px;
//   color: #ffffff;
//   padding: 0 25px;
//   content: attr(data-hover);
//   -webkit-transition: background 0.3s;
//   -moz-transition: background 0.3s;
//   transition: background 0.3s;
//   -webkit-transform: rotateX(-90deg);
//   -moz-transform: rotateX(-90deg);
//   transform: rotateX(-90deg);
//   -webkit-transform-origin: 50% 0;
//   -moz-transform-origin: 50% 0;
//   transform-origin: 50% 0;
// }

// .section-btn button:hover span,
// .section-btn button:focus span {
//   -webkit-transform: rotateX(90deg) translateY(-22px);
//   -moz-transform: rotateX(90deg) translateY(-22px);
//   transform: rotateX(90deg) translateY(-22px);
// }

// .csstransforms3d .section-btn a:hover span::before,
// .csstransforms3d .section-btn a:focus span::before,

// .csstransforms3d .section-btn button:hover span::before,
// .csstransforms3d .section-btn button:hover span::before {
//   background: #000000;
// }
