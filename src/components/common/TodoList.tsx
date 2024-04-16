import { memo } from "react";

import { Edit, Delete } from "@mui/icons-material";
import { Grid, Typography, Checkbox, Box } from "@mui/material";

import { todoListSX, todoTableSX } from "../../helpers/styleObject/todoList";

import SearchOffIcon from "@mui/icons-material/SearchOff";

import checkboxEmpty from "../../assets/images/svgs/checkbox-blank-circle-line.svg";
import checkboxFilled from "../../assets/images/svgs/checkbox-circle-fill.svg";

export const TodoList = memo<{
  todos: string[];
  deleteHandler: (id: number) => void;
}>(({ todos }) => {
  return (
    <Grid sx={todoListSX}>
      {todos?.length > 0 ? (
        todos?.map((item, key) => (
          <TodoTable
            date="July 32"
            id={key}
            name={item}
            proirity={"Low proirity"}
            description={"this is a description"}
          />
        ))
      ) : (
        <Grid className="no-data">
          <SearchOffIcon className="image" color="disabled" />
        </Grid>
      )}
    </Grid>
  );
});

interface ITodoTable {
  id: number;
  name: string;
  date: string;
  proirity: string;
  description: string;
}

const TodoTable = memo<ITodoTable>(
  ({ name, date, description, id, proirity }) => {
    return (
      <Grid container sx={todoTableSX} key={id} className="todo-list-container">
        <Grid item xs={12} md={8} className="title-wrapper">
          <Typography className="title">{name}</Typography>
          <Typography className="subtitle">{description}</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="actions-wrapper">
          <Typography className="priorities">{proirity}</Typography>
          <Edit className="icon" color="primary" />
          <Typography className="date">{date}</Typography>
          <Grid className="checkbox-wrapper">
            <Checkbox
              checkedIcon={<Box component="img" src={checkboxFilled} />}
              icon={<Box component="img" src={checkboxEmpty} />}
              className="checkbox"
              color="primary"
            />
          </Grid>
          <Delete
            className="icon"
            color="primary"
            // onClick={() => deleteHandler(key)}
          />
        </Grid>
      </Grid>
    );
  }
);
