import styled from 'styled-components';

import {
  NetworkItemContainerParams,
  NetworkItemNetworkLinkParams,
} from '../../utils/types';

export const Container = styled.div<NetworkItemContainerParams>`
  background-color: ${params => params.buttonColor};
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 0 6px #000;

  &:hover {
    background-color: ${params => params.textHoverColor};
  }
`;

export const NetworkLink = styled.a<NetworkItemNetworkLinkParams>`
  color: ${params => params.textColor};
  text-decoration: none;
`;

export const NetworkName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px 20px;
  font-size: 18px;
`;
