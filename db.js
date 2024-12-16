const mongoose = require('mongoose');
// database uri to coonrct with database server.
const mongoURI ='mongodb://127.0.0.1:27017/hoteldb';


// sut up mongoDb connnection
mongoose.connect(mongoURI,{
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