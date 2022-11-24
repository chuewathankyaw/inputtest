const express = require("express");
const app = express();
const postRoute = require("./router/postRoute");

app.use(express.json());
app.use("/api/post", postRoute.routers);

app.listen(8800, () => {
  console.log("connected to backend");
});
