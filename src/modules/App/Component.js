import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TodosList } from './components/TodosList';
import { todoInputChanged, addNewTodo, deleteTodo } from '../../redux/actions';

class Component extends React.Component {
  handleChange = (event) => {
    this.props.currentTodoTextChanged(event.target.value);
  };

  handleClickAdd = () => {
    this.props.addNewTodo();
  };

  handleClickDelete = (index) => {
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <TodosList
        todosRemaining={this.props.todosRemaining}
        todosList={this.props.todosList}
        handleChange={this.handleChange}
        handleClickDelete={this.handleClickDelete}
        currentTodo={this.props.currentTodo}
        handleClickAdd={this.handleClickAdd}
      />
    );
  }
}

Component.displayName = 'App';

const mapStateToProps = ({ todos }) => {
  const { currentTodo, todosList, todosRemaining } = todos;
  return {
    currentTodo,
    todosList,
    todosRemaining
  };
};

const mapDispatchToProps = dispatch => ({
  currentTodoTextChanged: todoText => dispatch(todoInputChanged(todoText)),
  addNewTodo: () => dispatch(addNewTodo()),
  deleteTodo: id => dispatch(deleteTodo(id))
});

Component.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  todosList: PropTypes.arrayOf(PropTypes.any).isRequired,
  todosRemaining: PropTypes.number.isRequired,
  currentTodoTextChanged: PropTypes.func.isRequired,
  addNewTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export { connectedComponent as Component };
