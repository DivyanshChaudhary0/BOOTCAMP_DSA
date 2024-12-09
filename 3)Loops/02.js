
// Check that a number is a prime number

// let n = 13;
// for(var i=2;i<n;i++){
//     if(n%i==0)
//         break;
// }
// if(n==i) console.log(`${n} is a prime number`);
// else console.log(`${n} is not a prime number`);

// Find the next prime number

function find_next_prime(n){
    let next_prime;
    let i,j;
    for(i=n+1; ;i++){
        for(j=2;j<i;j++){
            if(i%j==0) break;
        }
        if(i==j){
            next_prime = i;
            break;
        }
    }
    return next_prime;
}

console.log(find_next_prime(8));