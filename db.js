const mongoose = require('mongoose');
 require('dotenv').config();

// database uri to coonrct with database server.
const mongoURL ='mongodb://127.0.0.1:27017/hoteldb';
//const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = 'mongodb+srv://rameshmandal:ramesh123@hotels.ml3hm.mongodb.net/'
//process.env.MONGODB_URL;

// sut up mongoDb connnection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// mongodb default connection
//mongoose maintains a default connection object representing mongodb connection.
const db = mongoose.connection;

// massage to connected
db.on('connected', () => {
    console.log("Database server connected !!");
});

//message to error
db.on('error', () => {
    console.log("Database server connection Error !!");
});

//message to disconnected database.
db.on('disconnected', () => {
    console.log("Database server Disconnected !!");
});

// Export the database connection.
module.exports = db;