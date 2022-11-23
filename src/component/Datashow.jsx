import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useEffect } from "react";
export default function Forminput() {
  return (
    <section>
      <div>
        <h1>Posts</h1>
      </div>

      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box width="95%%">
            <Card sx={{ width: "95%" }}>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  Title
                </Typography>
                <Typography variant="body1">Context </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
