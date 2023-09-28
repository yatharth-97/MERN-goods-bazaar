const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const port = process.env.port || 5000;

const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');

app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);

app.listen(port, () => {
  console.log(`Node/Express server started on port ${port}`);
});
