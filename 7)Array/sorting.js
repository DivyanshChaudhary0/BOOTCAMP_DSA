
// Insertion Sort
let arr = [4,2,7,2,8,3,1];

function insertion_Sort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

// Selection Sort
function selection_Sort(arr){
    let minIndex = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex])
                minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// console.log(selection_Sort(arr));

// Bubble Sort
function bubble_Sort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble_Sort(arr))

// Merge Sort

