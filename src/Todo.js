import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./Hooks/useToggle";
import ListItem from "@material-ui/core/ListItem";
import {
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import CheckBox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          editTodo={editTodo}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <CheckBox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
export default Todo;
