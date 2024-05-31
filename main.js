let age = 18
if (age >= 18) {
    console.log("You can vote")
} else {
    console.log("You can not vote");
}


if (age <= 18) {
    console.log("You can not vote")
} else {
    console.log("You can vote");
}

let a = 5;
let b = 7;

if(a==b){
    console.log("This is true");
}else{
    console.log("This is false");
}

let c = 7;
let d = 7;

if(c===d){
    console.log("This is true");
}else{
    console.log("This is false");
}

let vote = 50;

if(10 != vote){
    console.log("Still Voting");
}else{
    console.log("Voting Finish");
}

var input = +prompt()
var mod = input % 2

if(mod != 0){
   console.log("Number is Odd");
}else{
   console.log("Number is Even")
}