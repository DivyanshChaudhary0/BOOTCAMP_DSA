
// Q-4
// A hailstone sequence is generated by the following 
// process:
//  Start with any positive integer n.
//  If n is even, divide it by 2 to get n / 2. 
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
//  Repeat the process indefinitely, stopping when n reaches 1.
// 7 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2

let number = Number(prompt("Enter number"));
while(number){
    if(number%2===0){
        number = parseInt(number/2);
        console.log(number);
    }
    else if(number%2!==0){
        number = parseInt(3*number+1);
        console.log(number);
    }
    if(number === 1) break;
    number = Number(prompt("Enter number"));
}