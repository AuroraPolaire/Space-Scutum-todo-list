import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TextFieldItem = ({ text, setChangedText }) => {
  const handleTextChange = e => {
    setChangedText(e.currentTarget.value);
  };

  return (
    <TextField
      className="textarea"
      id="outlined-multiline-static"
      label="Edit:"
      multiline
      rows={3}
      defaultValue={text}
      onChange={e => handleTextChange(e)}
    />
  );
};

export default TextFieldItem;

TextFieldItem.propTypes = {
  text: PropTypes.string.isRequired,
  setChangedText: PropTypes.func.isRequired,
};
