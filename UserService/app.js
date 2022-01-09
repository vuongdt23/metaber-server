const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
app.use (cors ());
app.use (bodyParser.json ());

app.listen (4004, () => {
  console.log ('User service running on port 4003');
});
