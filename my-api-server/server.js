const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', require('./routes/itemRoutes'));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
