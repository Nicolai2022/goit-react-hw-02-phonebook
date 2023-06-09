import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  background-color: #f1f5c4;
`;

export const ContactText = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 16px;
`;

export const DeleteItemBtn = styled.button`
  font-size: 10px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #c9f1c7;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #c1f010;
    color: #000;
  }
`;
