import React from 'react';
import PropTypes from 'prop-types';

import Todo from './../components/Todo';

export const TodosList = ({
  todosRemaining,
  todosList,
  handleClickDelete,
  handleChange,
  currentTodo,
  handleClickAdd
}) =>
  (
    <div className="todo-list">
      <h1>todos</h1>
      <p><span id="counter">{todosRemaining}</span> remaining</p>
      <div>
        {
          todosList.length
            ? todosList.map((todoItem, index) =>
              (<Todo
                key={todoItem.id}
                onClickDelete={() => handleClickDelete(index)}
                text={todoItem.text}
              />))
          : 'You\'re all done 🌴'
        }
      </div>
      <div className="todo-input">
        <input onChange={handleChange} placeholder="..." type="text" value={currentTodo} />
        <button onClick={handleClickAdd}>Add</button>
      </div>
    </div>
  );

TodosList.propTypes = {
  todosRemaining: PropTypes.number.isRequired,
  todosList: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentTodo: PropTypes.string.isRequired,
  handleClickAdd: PropTypes.func.isRequired
};
