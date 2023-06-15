import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px;
`;

export const Thumb = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: #0a47b7;

  :hover {
    background-color: #00158e;
  }
  :active {
    background-color: #00158e;
  }
`;
