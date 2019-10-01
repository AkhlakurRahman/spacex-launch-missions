import styled from 'styled-components';

const LoaderStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  .loader {
    width: 5rem;
    height: 5rem;
    display: inline-block;
    padding: 0px;
    border-radius: 100%;
    border: 5px solid;
    border-top-color: rgba(254, 168, 23, 0.65);
    border-bottom-color: rgba(57, 154, 219, 0.65);
    border-left-color: rgba(188, 84, 93, 0.95);
    border-right-color: rgba(137, 188, 79, 0.95);
    -webkit-animation: loader 2s ease-in-out infinite alternate;
    animation: loader 2s ease-in-out infinite alternate;
  }
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(720deg);
    }
  }
`;

export default LoaderStyles;
