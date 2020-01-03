import React, { useEffect } from "react";
import useTodoState from "./Hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log(
    "Todo List favicon icon by Icons8",
    "https://icons8.com/icons/set/todo-list--v2"
  );

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "white"
      }}
      elevation={0}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "rgba(3, 244, 252,0.7)", height: "64px" }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ color: "black" }}>
            Simple TodoApp with Hooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            editTodo={editTodo}
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
