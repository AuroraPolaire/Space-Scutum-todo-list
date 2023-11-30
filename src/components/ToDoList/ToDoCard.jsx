import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckboxItem from './CardParts/Checkbox';
import TextFieldItem from './CardParts/TextFieldItem';
import CloseButton from './CardParts/CloseButton';
import SaveButton from './CardParts/SaveButton';
import DeleteButton from './CardParts/DeleteButton';

const ToDoCard = ({
  id,
  text,
  state,
  index,
  page,
  changeTodo,
  setChangeTodo,
}) => {
  const [changedText, setChangedText] = useState('');

  return (
    <div className="todo_list">
      <div className="todo__text-checkbox-container">
        <CheckboxItem id={id} text={text} state={state} />
        {changeTodo[index] ? (
          <TextFieldItem text={text} setChangedText={setChangedText} />
        ) : (
          <div className="todo__text">{text}</div>
        )}
      </div>
      <div className="button-group">
        <CloseButton
          index={index}
          setChangeTodo={setChangeTodo}
          changeTodo={changeTodo}
        />
        <SaveButton
          changedText={changedText}
          id={id}
          text={text}
          index={index}
          setChangeTodo={setChangeTodo}
          changeTodo={changeTodo}
        />
        <DeleteButton page={page} id={id} />
      </div>
    </div>
  );
};

export default ToDoCard;

ToDoCard.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  changeTodo: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setChangeTodo: PropTypes.func.isRequired,
};
