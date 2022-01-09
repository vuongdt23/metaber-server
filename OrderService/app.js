const express = require ('express');
const {randomBytes} = require ('crypto');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
const {default: axios} = require ('axios');
app.use (cors ());
app.use (bodyParser.json ());

const eventRouter = require ('./Routes/eventRouter');
app.use ('/events/', eventRouter);
app.listen (4002, () => {
  
  console.log ('order service running on port 4002');
});
