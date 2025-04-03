// server/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const { sequelize } = require('./models');

// Test DB Connection
const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection to DB successful!');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

testDbConnection();

// Routes
app.use('/api/cars', require('./routes/cars'));
app.use('/api/auth', require('./routes/auth'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;