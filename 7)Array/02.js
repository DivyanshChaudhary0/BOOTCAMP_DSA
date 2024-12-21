
// ------------- Sum of numbers of size 10 ---------------
// let arr = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// console.log(sum);

// ------------- Calculate average of numbers of size 10 ---------------

// let arr = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;
// let avg;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// avg = parseFloat(sum/arr.length);
// console.log(`Average is ${avg}`);

// ------------- Find Sum of even and Odd numbers ---------------

// let n = Number(prompt("Enter size of array"));
// let arr = [];
// let sumOfEven = 0;
// let sumOfOdd = 0;

// for(let i=0;i<n;i++){
//     let num = Number(prompt(`Enter ${i+1}th element: `));
//     arr.push(num);
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2 === 0){
//         sumOfEven += arr[i];
//     }
//     else{
//         sumOfOdd += arr[i];
//     }
// }
// console.log(sumOfEven,sumOfOdd);

// ------------- Find the greatest number in the array ---------------

// let n = Number(prompt("Enter size of array"));
// let arr = [];

// for(let i=0;i<n;i++){
//     let num = Number(prompt(`Enter ${i+1}th element: `));
//     arr.push(num);
// }
// let MAX = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(MAX<arr[i])
//         MAX = arr[i];
// }
// console.log(MAX);

// ------------- Find the smallest number in the array ---------------
// let n = Number(prompt("Enter size of array"));
// let arr = [];

// for(let i=0;i<n;i++){
//     let num = Number(prompt(`Enter ${i+1}th element: `));
//     arr.push(num);
// }
// let MIN = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(MIN>arr[i])
//         MIN = arr[i];
// }
// console.log(MIN);

// ------------- Sort array elements ---------------
// let arr = [9,12,4,8,10];

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// ------------- Find the second greatest number in the array ---------------
// let arr = [9,12,4,8,10];
// let Max ;
// let second_Max ;
// if(arr[0]>arr[1]){
//     Max = arr[0];
//     second_Max = arr[1];
// }
// else{
//     Max = arr[1];
//     second_Max = arr[0];
// }

// for(let i=2;i<arr.length;i++){
//     if(Max<arr[i]){
//         second_Max = Max;
//         Max = arr[i];
//     }
//     else if(arr[i] > second_Max){
//         second_Max = arr[i];
//     }
// }
// console.log(second_Max);

// ------------- Find the second smallest number in the array ---------------
// let arr = [9,12,4,8,10];
// let Min ;
// let second_Min ;
// if(arr[0]<arr[1]){
//     Min = arr[0];
//     second_Min = arr[1];
// }
// else{
//     Min = arr[1];
//     second_Min = arr[0];
// }

// for(let i=2;i<arr.length;i++){
//     if(arr[i]<Min){
//         second_Min = Min;
//         Min = arr[i];
//     }
//     else if(arr[i]<second_Min){
//         second_Min = arr[i];
//     }
// }
// console.log(second_Min);

// ------------- Sort array elements in desending order ---------------
// -> first sort the array than reverse it

// let arr = [10, 1, 3, 30, 45, 40, 48, 50];
// let i = 0;
// let j = arr.length - 1;

// function sort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// sort(arr)
// console.log(arr);

// function reverse(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }
// reverse(arr, i, j);

// console.log(arr);

// ------------- copy array elements into another array ---------------

// let arr1 = [10, 1, 3, 30, 45, 40, 48, 50];
// let arr2 = [];

// for(let i=0;i<arr.length;i++){
//     arr2[i] = arr1[i]
// }

// console.log(arr2);
