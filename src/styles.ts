import styled from 'styled-components';

import {
  MainContainerParams,
} from './utils/types';

export const Container = styled.div<MainContainerParams>`
  position: relative;
  background-color: ${params => params.bgColor};
  color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
  padding: 40px 0;
  ${params => params.bgImage && (
    `background: url('${params.bgImage}') center no-repeat;
    background-size: cover;
    background-attachment: fixed;`
  )}
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50vw;
  min-width: 50vw;
  max-width: 50vw;

  @media screen and (max-width: 720px) {
    width: 90vw;
    min-width: 90vw;
    max-width: 90vw;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 48px;
  text-shadow: 2px 2px 3px #111;
`;

export const BioTitleTab = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2px 10px;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  font-weight: bold;
`;

export const Bio = styled.div`
  position: relative;
  text-align: center;
  font-size: 14px;
  text-shadow: 2px 2px 3px #111;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 15px;
  border-radius: 0 4px 4px 4px;
`;

export const Networks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
