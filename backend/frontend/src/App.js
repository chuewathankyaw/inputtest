import "./App.css";
import Forminput from "./component/input";
import Datashow from "./component/Datashow";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Grid container my={2} sx={{ margin: "2rem" }}>
        <Grid sm={12} md={6}>
          <Forminput />
        </Grid>
        <Grid sm={12} md={6}>
          <Datashow />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
