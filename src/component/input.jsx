import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import "./input.css";

export default function Forminput() {
  const [value, setvalue] = useState("");

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
                <TextField label="id" required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Title" required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Desc" required />
              </Grid>
            </Grid>
          </Container>
          <Stack direction="row" spacing={2}></Stack>
        </div>

        <Button variant="contained" size="small" className="button">
          Contained
        </Button>
      </Box>
    </>
  );
}
