const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const customerRoute = require('./routes/customer');
const transactionRoute=require('./routes/TransactionHistory');
app.use(cors());
app.use(express.json());
app.use(customerRoute);
app.use(transactionRoute);
mongoose.connect('mongodb://localhost:27017/OBS', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Data sync successful');
        app.listen(5500, () => {
            console.log('Server is running on port 5500');
        });
    })
    .catch(err => {
        console.error('Database sync error:', err);
    });
