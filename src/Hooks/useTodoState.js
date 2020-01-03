import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, settodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    settodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    const updateTodos = todos.filter(todo => todo.id !== todoId);
    settodos(updateTodos);
  };

  const toggleTodo = todoId => {
    const updateTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    settodos(updateTodos);
  };
  const editTodo = (todoId, newTask) => {
    const updateTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    settodos(updateTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  };
};
