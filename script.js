
let principal = 50000; 
let rate = 10;        
let time = 3;
let n = 1; 

const amount = principal * Math.pow((1 + ((rate / 100) / n)), (n * time));


let compoundInterest = amount - principal;


console.log("Principal Amount: ₹" + principal);
console.log("Rate of Interest: " + rate + "%");
console.log("Time: " + time + " years");
console.log("Compound Interest after " + time + " years is: ₹" + compoundInterest.toFixed(2));
console.log("Total Amount: ₹" + amount.toFixed(2));