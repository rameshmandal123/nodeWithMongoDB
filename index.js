//const obj = require('./second'); // common js module that mean import from another js file
//console.log("Hello Word");
//console.log(obj.person);
const express = require('express')
//const http = require("http");
/*const { listeners } = require("process");
 //http.createServer(requestListner);

listener = function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('<h2 style="text-align: center;">Hello World</h2>');
}
server = http.createServer(listener);
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');*/

const app = express();

app.get('/', function(req,resp){
resp.send("hello man how !")
});

app.get('/person',function(req,resp){
    const personn = {
        "name":"Ramesh",
        "age":4
    }
    resp.send(personn);
})

app.listen(3000, ()=>{
    console.log("Server run on Port 3000");
});
