const express = require ('express');
const {randomBytes} = require ('crypto');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
const {default: axios} = require ('axios');
app.use (cors ());
app.use (bodyParser.json ());

const orders = {};



app.get ('/orders/', (req, res) => {});

app.post ('/orders/', (req, res) => {
  const order = {
    orderDate: new Date ().toISOString (),
    products: [],
  };

  const id = randomBytes (4).toString ('hex');
  orders[id] = {
    id,
    order,
  };

  res.status (201).send (orders[id]);
});

app.listen (4001, () => {
  console.log ('Order Service running on port 4001');
});
