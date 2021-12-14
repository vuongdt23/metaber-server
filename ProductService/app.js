const express = require ('express');
const {randomBytes} = require ('crypto');
const bodyParser = require('body-parser')
const app = express ();
app.use(bodyParser.json())
const products = {};

app.get ('/products', (req, res) => {
  res.send (products);
});

app.post ('/products', (req, res) => {
  const product = {
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productDescription: req.body.productDescription,
  };

  const id = randomBytes (4).toString ('hex');
  products[id] = {
    id,
    product,
  };

  res.status (201).send (products[id]);
});

app.listen (4000, () => {
  console.log ('Product Service running on port 4000');
});
