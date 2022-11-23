import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
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
                <TextField
                  label="id"
                  required
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                  helperText={
                    !value
                      ? "Required"
                      : "Do not share your password with anyone"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  required
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                  helperText={
                    !value
                      ? "Required"
                      : "Do not share your password with anyone"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Desc"
                  required
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                  //   error={!value}
                  helperText={
                    !value
                      ? "Required"
                      : "Do not share your password with anyone"
                  }
                />
              </Grid>
            </Grid>
          </Container>
          <Stack direction="row" spacing={2}></Stack>
        </div>
      </Box>
    </>
  );
}
