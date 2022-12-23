import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 5px;
  bottom: 5px;
  font-size: 15px;
  filter: drop-shadow(1px 1px 0 #000);
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 2px;
  padding: 2px 4px;

  & a {
    color: #f9f9f9;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
