const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const urlRoutes = require('./routes/urlRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config({ path: '../.env' });

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('combined')); // Logs all HTTP requests

// Routes
app.use('/api/url', urlRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('MongoDB connection failed', err));


    const jwt = require('jsonwebtoken');

const token = jwt.sign(
    { user: 'poojitha' },    // payload
    'secretkey123',          // secret
    { expiresIn: '1h' }      // expiry
);

console.log('Your Token:', token);
