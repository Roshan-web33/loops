// Find the sum of first n numbers where n is a variable
let sum = 0
for(let n = 1; n<=5; ++n){
   sum = sum + n;

}
// console.log(sum);  //answer is 15




// // Print table of n where n is a variable.

for(let i =1; i<11; ++i ){
    let n = 5;
    console.log("5 X",i,"=",i*n);
    
}               //print the table of 5





// Check if it is a prime
let num = 34;
let count = 0;
for(let i=1; i<=num; ++i){
    if(num%i === 0){
        ++count;
    }
}

if(count === 2){
    console.log(num," is a Prime Number");
    
}
else{
    console.log(num," is not a Prime Number");
}







// Check if it is a prime

let a = 12;

for(let i = 1; i<=a;++i){
    if(a%i === 0){
        console.log(i ,"is factor of",a);
        
    }
    
}




// • Find sum of all digits of a number 

let b = 144;
let add = 0;
while(b>0) {
    let digit = b%10;
    add = add +digit;
    b= Math.floor(b/10);
}

console.log(add);


let c = 153;
let original = c;
let addition = 0;

while (c > 0) {
  let digit = c % 10;
  addition = addition + (digit * digit * digit);
  c = Math.floor(c / 10);
}

if (addition === original) {
  console.log(original + " is an Armstrong Number");
} else {
  console.log(original + " is Not an Armstrong Number");
}
