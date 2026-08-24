//1st module
//variables
//data type
console.log("Hi");

const name="Antor";
let age=22;
var cgpa=8.05;
const per= {firstname:"Antor",lastname:"Biswas"};
let x = true;
console.log(name,age,cgpa,per,x);
console.log(typeof(name),typeof(age),typeof(cgpa),typeof(per),typeof(x));

//operator

let a=10;
let b=5;

let sum=a+b;
let mul=a*b;
let div=a/b;
let rmd=a%b;
console.log(sum,mul,div,rmd);

//quiz
let c="5"+5;
console.log(c);
sum +=10;
console.log(sum);

let y=true;
let z=y &&= 10;
console.log(z);

//string
let first="Antor";
let last="Biswas";

let fi=`${first} ${last}`
console.log(fi)
let add="khulna";
console.log(add.toUpperCase())

let te="this is  antor from kolkata";
console.log(te)
console.log(te.length)

let xy="Antor Biswas";
console.log(xy.slice(0,5));

//loops
//if..else

let marks=88;

if (marks>=80 || marks>=90){
    console.log("A+");
}
else if (marks>=70){
    console.log("A");
}
else if (marks>=50){
    console.log("B");
}
else{
    console.log("F");
}

//switch
let agee=22;

switch(true){
    case agee>=18:
        console.log("Adult");
        break;
    case agee<18 && agee>=1:
        console.log("child");
        break;
    default:
        console.log("not born");
        break;
}
//ternery
let ageee=20;
ageee>=18 ? console.log("Adult") : console.log("child");

//function
//return type
function login(number){
    console.log("Enter pin:");
    return number;
}

let pass=login(1234)

console.log(`your pin ${pass}`)
//without return type
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Antor");

//arrow function

const bazar = (price,items) =>{
    const total= price*items;
    return total;
}
const khoroj=bazar(100,2);
console.log(khoroj);

//arrow function 2nd without return

const add1 = (a, b) => a + b;

const sum0=add1(10,10);
console.log(sum0)

