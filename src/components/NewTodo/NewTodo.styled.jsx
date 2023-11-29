import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledNewTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const StyledSubmitButton = styled(Button)`
  @media screen and (min-width: 768px) {
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    width: 200px;
  }
`;
