const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}.`);
})