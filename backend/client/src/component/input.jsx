import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useState, useRef } from "react";
import "./input.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";

export default function Forminput() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dispatch = useDispatch();
  const addPost = (e) => {
    e.preventDefault();
    // console.log("title is input data", titleRef.current.value);
    // console.log("desc is data", descRef.current.value);
    const newObj = {
      title: titleRef.current.value,
      description: descRef.current.value,
    };

    titleRef.current.value = "";
    descRef.current.value = "";

    dispatch(createPost(newObj));
    // axios.post("http://localhost:8800/api/post/", newObj);
  };

  return (
    <>
      <div>
        <h1>Input Post</h1>
      </div>
      <Box marginTop={5}>
        <div className="imput">
          <Container>
            <Grid container my={4} direction="row" spacing={4}>
              <Grid item xs={12}>
                <TextField
                  id="title"
                  type="text"
                  label="Title"
                  name="title"
                  required
                  inputRef={titleRef}
                  // onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={descRef}
                  id="description"
                  type="text"
                  label="Desc"
                  required
                  name="description"
                  // onChange={onChange}
                />
              </Grid>
            </Grid>
          </Container>
          <Stack direction="row" spacing={2}></Stack>
        </div>

        <Button
          variant="contained"
          size="small"
          className="button"
          onClick={addPost}
        >
          Contained
        </Button>
      </Box>
    </>
  );
}
