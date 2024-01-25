const express = require("express");

const app = express();

const port = 3200;

app.get("/", (request, response) => {
  response.send("Hello from Express Server");
});

app.listen(port);
