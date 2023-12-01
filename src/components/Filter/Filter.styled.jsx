import styled from 'styled-components';

export const StyledFilter = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .filter__buttom {
    cursor: pointer;
    padding: 10px 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
    transition: background-color 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &.chosen {
      background-color: lightgray;
    }
    &:hover {
      background-color: lightgray;
    }
  }
`;
