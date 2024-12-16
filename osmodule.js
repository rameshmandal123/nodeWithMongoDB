const os = require('os');
const fs = require('fs');

const imdata = require('./filemodule');

//console.log(os.freemem());
//console.log(os.homedir());
//console.log(os.hostname());
//console.log(os.cpus());
//console.log(os.machine());
//console.log(os.networkInterfaces());
//console.log(os.platform());
//console.log(os.release());
//console.log(os.type());

const user = os.userInfo();

fs.appendFile('greeting.txt',  "Hi " + user.username + '!\n', () =>{
    console.log("file is Created ");
});

let sd = imdata.add(2,3);
console.log("summ is ", sd);