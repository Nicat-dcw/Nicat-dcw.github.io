const express = require("express");
const app = express();
var Ddos = require('ddos')
  var ddos = new Ddos({burst:10, limit:15, errormessage:"Nabion mk"})
  app.use(ddos.express);

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "index.html");
});
app.get("/*", (request, response) => {
  response.sendFile(__dirname + "404.html");
});
