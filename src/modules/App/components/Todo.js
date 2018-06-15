import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, onClickDelete }) => {
  return (
    <div className="todo-item">
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default Todo;
