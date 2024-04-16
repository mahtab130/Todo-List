import { useContext } from "react";

import { Grid, Typography } from "@mui/material";

import { TodoForm } from "../common/TodoForm";
import { SwitchMui } from "../controller/Switchs";
import { MainContext } from "../context/MainContext";
import { TodoListLayoutSX } from "../../helpers/styleObject/todoListLayout";

const TodoListLayout = () => {
  const { changeTheme, theme } = useContext(MainContext);

  return (
    <Grid sx={TodoListLayoutSX(theme)}>
      <Grid className="switch-wrapper">
        <SwitchMui
          onChange={(_, checked) => changeTheme(checked ? "dark" : "light")}
        />
      </Grid>
      <Grid className="todo-list-wrapper">
        <Typography className="todo-title">ToDo List By Me!</Typography>
        <Grid className="todo-wrapper">
          <Grid className="status-wrapper">
            <Typography className="total-status">TOTAL : 0</Typography>
            <Typography className="success-status">SUCCESS : 0</Typography>
            <Typography className="pending-status">PENDING : 0</Typography>
          </Grid>
          <TodoForm />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoListLayout;
