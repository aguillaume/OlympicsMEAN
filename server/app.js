"use strict";

let express = require("express");
let app = express();

app.use( express.static(__dirname + "/../client") ); //tells express to look inside client. This will serve the index.html file.
app.get("/sports", (request, response) => {
  response.json(["Cycling", "Weightlisfting", "Swimming"]);
});
app.listen(8181, () => console.log("listening on 8181"));
