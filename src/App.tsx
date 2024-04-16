import {
  MainContext,
  MainContextProvider,
} from "./components/context/MainContext";
import TodoListLayout from "./components/layouts/TodoListLayout";
import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const { theme } = useContext(MainContext);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <MainContextProvider>
      <ThemeProvider theme={darkTheme}>
        <TodoListLayout />
      </ThemeProvider>
    </MainContextProvider>
  );
};

export default App;
