const express = require ('express');
const {randomBytes} = require ('crypto');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
app.use (cors ());
app.use (bodyParser.json ());
const products = {};
const productsByOrderId = {};
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

app.get ('/orders/:id/products/', (req, res) => {
  res.send (productsByOrderId[req.params.id]);
});

app.post ('/orders/:id/products/', (req, res) => {
  const product = {
    productId: req.body.productId,
    productName: req.body.productName,
    productAmount: req.body.productAmount,
  };

  console.log (product);
  let productsArr = productsByOrderId[req.params.id] || [];

  productsArr.push (product);
  productsByOrderId[req.params.id] = productsArr;
  res.status (201).send (productsByOrderId);
});

app.listen (4002, () => {
  console.log ('Product Service running on port 4002');
});
