import styled, {
  keyframes,
} from 'styled-components';

const pulsate = keyframes`
  from {
    scale: 1;
  }

  to {
    scale: 1.1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(6, 6, 6, 1) 0%,
    rgba(48, 48, 48, 1) 30%,
    rgba(48, 48, 48, 1) 70%,
    rgba(6, 6, 6, 1) 100%
  );

  & img {
    animation: ${pulsate} 0.8s linear infinite alternate;
  }
`;
