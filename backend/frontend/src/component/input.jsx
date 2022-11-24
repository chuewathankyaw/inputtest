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

export default function Forminput() {
  const [value, setvalue] = useState("");
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const addPost = (e) => {
    console.log("title is", titleRef.current.value);
    console.log("description is", descRef.current.value);
    e.preventDefault();
    if (
      titleRef.current.value.length === 0 ||
      descRef.current.value.length === 0
    ) {
      return alert("please fill all data");
    }
    const newObj = {
      title: titleRef.current.value,
      description: descRef.current.value,
    };
    console.log("new input obj is", newObj);
    axios.post("http://localhost:8800/api/post/", newObj);

    titleRef.current.value = "";
    descRef.current.value = "";
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
                <TextField label="Title" required ref={titleRef} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Desc" required ref={descRef} />
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
