const firebaseAdmin = require ('firebase-admin');
const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
app.use (cors ());
app.use (bodyParser.json ());
var adminKey = require ('./APIKeys/metaberFBAdmin.json');

firebaseAdmin.initializeApp ({
  credential: firebaseAdmin.credential.cert (adminKey),
});

app.listen (4006, () => {
  console.log ('Push notification service running on port 4006');
});
