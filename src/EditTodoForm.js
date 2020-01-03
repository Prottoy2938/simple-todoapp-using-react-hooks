import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./Hooks/useInputState";

function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "70%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
