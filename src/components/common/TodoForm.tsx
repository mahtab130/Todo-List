import { Box, Grid, TextField } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { TodoList } from "./TodoList";
import { todoFormSX } from "../../helpers/styleObject/todoForm";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  // const [openModal, setOpenModal] = useState<boolean>(false);

  const addTodohandler = () => {
    if (inputValue?.trim() !== "") {
      setTodos([inputValue, ...todos]);
      setInputValue("");
    }
  };

  const deleteTodohandler = (id: number) => {
    const newTodos = todos?.filter((_, item) => item !== id);
    setTodos(newTodos);
  };

  return (
    <Grid sx={todoFormSX} className="todo-form-wrapper">
      <TextField
        value={inputValue}
        variant="standard"
        className="todo-input"
        placeholder="Enter new To-Do"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <Box className="icon-wrapper" onClick={addTodohandler}>
              <ArrowForwardIcon />
            </Box>
          ),
        }}
      />
      <TodoList deleteHandler={deleteTodohandler} todos={todos} />
    </Grid>
  );
};
