import "./App.css";
import Forminput from "./component/input";
import Datashow from "./component/Datashow";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "./features/posts/postSlice";
function App() {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getPost());
  }, [posts.length]);
  return (
    <div className="App">
      <Grid container my={2} sx={{ margin: "2rem" }}>
        <Grid sm={12} md={6}>
          <Forminput />
        </Grid>
        <Grid sm={12} md={6}>
          <Datashow posts={posts && posts} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
