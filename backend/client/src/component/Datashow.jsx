import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
export default function Forminput(props) {
  const postData = props.posts;
  return (
    <section>
      <div>
        <h1>Posts</h1>
      </div>
      <Grid container>
        {postData &&
          postData.map((data) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Box width="95%%" padding="10px">
                  <Card sx={{ width: "95%", height: "150px" }}>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {`Title : ${data.title}`}
                      </Typography>
                      <Typography variant="body1">
                        {`Context : ${data.description}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </section>
  );
}
