"use strict";

let express = require("express");
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use( express.static(__dirname + "/../client") ); //tells express to look inside client. This will serve the index.html file.
app.get("/sports", (request, response) => {
  let sports = mongoUtil.sports();
  sports.find().toArray((err, docs) => {
    console.log(JSON.stringify(docs));
    let sportNames = docs.map((sport) => sport.name);
    response.json(sportNames);
  });
});
app.listen(8181, () => console.log("listening on 8181"));
