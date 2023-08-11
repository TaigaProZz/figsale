const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'REACT_APP_DOMAIN',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

