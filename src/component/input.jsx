
import { Box, Container, Grid, InputAdornment, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import "./input.css"


export const Forminput = () => {

    return (
      <Box marginTop={5}>
        <div className="imput">
          <Container>
            <Grid container direction="row" spacing={3}>
              <Grid item xl={12} marginTop={2}>
                <TextField
                  label="id"
                  required
                />
              </Grid>
              <Grid item xl={12}>
                <TextField
                  label="Title"
                  required
                  
                />
              </Grid>
              <Grid item xl={12}>
                <TextField
                  label="Desc"
                  required
                 
                />
              </Grid>
            </Grid>
          </Container>
          <Stack direction="row" spacing={2}></Stack>
        </div>

        <Button variant="contained" size="small" className="button">Contained</Button>
      </Box>
    );
};
