import styled from 'styled-components';

export const StyledToDoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 10px;
  }

  .todo_list {
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 15px;
      margin-top: 20px;
    }

    @media screen and (min-width: 1440px) {
      flex-basis: 100%;
      flex: 1;
      flex-direction: column;
    }
  }

  .todo__text-checkbox-container {
    flex: 2;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 20px auto;
    grid-column-gap: 8px;

    @media screen and (min-width: 768px) {
      align-items: center;
    }
  }

  .textarea {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 500px;
    }

    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  .todo__text {
    padding: 16px;
    @media screen and (min-width: 768px) {
      min-width: 500px;
    }

    &.strikethrough {
      text-decoration: line-through;
    }
  }

  .button-group {
    flex: 1;
    display: flex;
    gap: 10px;
    justify-content: center;

    @media screen and (min-width: 768px) {
      flex-direction: column;
      gap: 5px;
    }

    @media screen and (min-width: 1440px) {
      flex-direction: row;
    }
  }
`;
