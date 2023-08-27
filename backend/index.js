require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: process.env.APP_DOMAIN,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES 
require('./routes/routes.js')(app);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});