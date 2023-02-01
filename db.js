const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb://localhost:27017/node-practice',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000,
  },
  (error) => {
    if (error) {
      console.log(`DB Error => ${error}`);
    } else {
      console.log('DB instance successfully connected');
    }
  }
);