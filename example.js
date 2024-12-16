var prompt = require('prompt-sync')();
//const name= "Ramesh";
//console.log(name);
const person = [
    {
        name: "Ramesh Mandal",
        age: 23,
        address: {
            country: "Nepal",
            City: "janakpur"
        },
        hobies: ["Cricket", "football", "codding"]
    },
    {
        name: "Deepak Poudel",
        age: 23,
        address: {
            country: "Nepal",
            City: "Parbat"
        },
        hobies: ["Cooding", "football", "Gaming"]
    },
]
// console.log(person);
/*const daat = person.forEach((value,index) =>{
 console.log(index+1,":" , value.name);
 console.log(value.hobies[0]);
});

let da = person.filter((v)=>{

});

const age = [12, 34, 23, 11];
let data = age.filter(checkAges);
function checkAges(age) {
    return age > 12;

}
console.log(data);*/

let a = prompt("enter number to find squre: ");

let sq = Math.floor(Math.pow(a,2));

console.log("sq is : ", sq);



