
import { Box, Container, Grid, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import "./input.css"


export const Forminput = () => {
      const [value, setvalue] = useState("");

    return (
      <Box marginTop={5}>
        <div className="imput">
          <Container >
            <Grid container direction="row" spacing={4}>
              <Grid item xl={12}>
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
              <Grid item xl={12}>
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
              <Grid item xl={12}>
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
    );
};
