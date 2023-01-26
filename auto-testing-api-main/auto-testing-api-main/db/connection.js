const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/test';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 75000,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
};

// connect database
mongoose.connect(uri, options);
const connection = mongoose.connection;

module.exports = connection;