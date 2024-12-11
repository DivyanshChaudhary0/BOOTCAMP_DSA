// ++++++++++++++++++++++++ 1) Sum of array of elements ++++++++++++++++++++++
// let a = [];
// let size = Number(prompt("Enter size: "));
// for(let i=0;i<size;i++){
//     a[i] = Number(prompt(`Enter ${i+1}th element`));
// }
// let sum = 0;

// for(let i=0;i<a.length;i++){
//     sum+=a[i];
// }
// console.log(sum);

//++++++++++++++++++++++++  2) First maximum element ++++++++++++++++++++++++++
// let arr = [20,40,50,55,8,12,68,100,43];
// let max = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max)
//         max = arr[i];
// }
// console.log(`maximum number is ${max}`);

// ++++++++++++++++++++++++++++ 3) Second max element +++++++++++++++++++++++++++
// let arr = [20,40,50,55,8,12,68,43];
// let max=arr[0]>arr[1]?arr[0]:arr[1];
// let second_max=arr[0]<arr[1]?arr[0]:arr[1];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         second_max=max;
//         max = arr[i];
//     }
//     else if(arr[i]>second_max){
//         second_max = arr[i];
//     }
// }
// console.log(max,second_max);

// ++++++++++++++++++++++++++++++ 4) Minimium element ++++++++++++++++++++++++++++
// let arr = [20,40,50,55,8,12,68,43];

// let min = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(`Minimium element in array is ${min}`);

// ++++++++++++++++++++++++++++ 5) Second min element +++++++++++++++++++++++++++++
// let arr = [20,40,50,55,8,12,68,43];
// let min = arr[0]<arr[1]?arr[0]:arr[1];
// let second_min = arr[0]>arr[1]?arr[0]:arr[1];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//         second_min = min;
//         min = arr[i];
//     }
//     else if(arr[i]<second_min){
//         second_min = arr[i];
//     }
// }
// console.log(`second minimum number is ${second_min}`);

// ++++++++++++++++++++++++++++ 5) Array is sorted or not +++++++++++++++++++++++++++++
// let arr = [1,2,3,4,5,6,7,8,9];
// let count = 0;

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<arr[i+1]){
//         count++;
//     }
// }
// console.log(count);
// if(count === arr.length-1){
//     console.log("Array is sorted");
// }
// else{
//     console.log("Array is not sorted");
// }

// ++++++++++++++++++++++++++++ 6) Left rotation by one step  +++++++++++++++++++++++++
// let arr = [10,20,30,40,50];
// let temp = arr[0];

// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp;
// console.log(arr);   // [20,30,40,50,10]

// ++++++++++++++++++++++++++++ 7) Right rotation by one step  +++++++++++++++++++++++++
// let arr = [10,20,30,40,50];
// let length = arr.length;
// let temp = arr[length-1];

// for(let i=length-1;i>=1;i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = temp;
// console.log(arr);  // [50,10,20,30,40]

// ++++++++++++++++++++++++++++ 8) Left rotation by K times +++++++++++++++++++++++++
// let k = 12;
// let arr = [10, 20, 30, 40, 50];
// const length = arr.length;

// k = k % length;
// for (let j = 1; j <= k; j++) {
//   let temp = arr[0];
//   for (let i = 0; i < length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[length - 1] = temp;
// }
// console.log(arr);

// ++++++++++++++++++++++++++++ 9) Right rotation by K times +++++++++++++++++++++++++
// let k = 12;
// let arr = [10, 20, 30, 40, 50];
// const length = arr.length;

// k = k % length;
// for (let j = 1; j <= k; j++) {
//   let temp = arr[length - 1];
//   for (let i = length - 1; i >= 1; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = temp;
// }
// console.log(arr);

// ++++++++++++++++++++++++++++ 9) Reverse an array using extra array +++++++++++++++++++++++++

// let arr = [10, 20, 30, 40, 50];
// let temp = [];

// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[arr.length-1-i];
// }
// console.log(temp);

// ++++++++++++++++++++++++++++ 9) Reverse an array (two pointer method) ++++++++++++++++++++++
// let arr = [10, 20, 30, 40, 50, 60];
// let i = 0,j = arr.length - 1;

// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// ++++++++++++++++++++++++++++ 10) Left rotation by block swap algorithm ++++++++++++++++++++++
// 0->k-1
// k->l-1
// 0->l-1

let arr = [10, 20, 30, 40, 50];
let n = 2;

reverse(arr,0,n-1);
reverse(arr,n,arr.length-1);
reverse(arr,0,arr.length-1);
console.log(arr);
function reverse(arr,i,j) {
    let temp = null;
    while(i<j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}