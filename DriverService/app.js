const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
app.use (cors ());
app.use (bodyParser.json ());


app.listen(4003, ()=>{
    console.log("Driver service running on port 4003")
})