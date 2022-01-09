const express = require ('express');
const {randomBytes} = require ('crypto');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
const eventRouter = require ('./Routes/eventRouter');
app.use (cors ());
app.use (bodyParser.json ());
app.use ('/events/', eventRouter);
app.listen (4002, () => {
  console.log ('Product Service running on port 4002');
});
