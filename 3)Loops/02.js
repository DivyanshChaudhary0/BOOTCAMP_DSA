// Check that a number is a prime number

// let n = 13;
// for(var i=2;i<n;i++){
//     if(n%i==0)
//         break;
// }
// if(n==i) console.log(`${n} is a prime number`);
// else console.log(`${n} is not a prime number`);

// Find the next prime number

// function find_next_prime(n){
//     let next_prime;
//     let i,j;
//     for(i=n+1; ;i++){
//         for(j=2;j<i;j++){
//             if(i%j==0) break;
//         }
//         if(i==j){
//             next_prime = i;
//             break;
//         }
//     }
//     return next_prime;
// }

// console.log(find_next_prime(8));

// let n = 123223455;
// let d = 5;
// let count = 0;

// while(n>0){
//     let ld = n%10;
//     if(ld === d){
//         count++;
//     }
//     n = Math.floor(n/10);
// }
// console.log(count);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (n) => {
  readline.on("line", (arr) => {
    arr = arr.split(" ").map(Number);
    arrayOperations(arr, n);
    readline.close();
  });
});

function arrayOperations(arr, n) {

  function find_sum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  }

  function find_max(arr, n) {
    let max = arr[0];
    for (let i = 1; i < n; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  let result = `${find_sum(arr, n)} ${Math.floor(find_sum(arr, n) / 6)} ${find_max(arr,n)}`;
  return result;
}

console.log(arrayOperations([1,2,3,4,5,6],6));

