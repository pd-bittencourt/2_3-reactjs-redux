import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/range";

const TodoList = ({ todos, addTodo }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button type="submit" onClick={() => addTodo("New text")}>
      Add
    </button>
  </>
);

TodoList.propTypes = {
  addTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: "ADD_TODO", payload: { text } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
