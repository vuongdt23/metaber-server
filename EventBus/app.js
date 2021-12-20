const express = require ('express');
const {randomBytes} = require ('crypto');
const bodyParser = require ('body-parser');
const app = express ();
const cors = require ('cors');
const axios = require('axios');
app.use (cors ());
app.use (bodyParser.json ());




const portList = {
    orderPort: 4001,
    productPort: 4002,
}


app.post('/events', (req, res)=>{
const event = req.body;
axios.default.post('http://localhost:'+ portList.orderPort+'/events', event);
axios.default.post('http://localhost:'+ portList.productPort+'/events', event);

})




app.listen (5001, () => {
  console.log ('Order Service running on port 4001');
});
