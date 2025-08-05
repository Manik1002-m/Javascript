function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        debugger;
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

{
    const nums = [5, 2, 9, 1, 7];
    console.log(findMax(nums));
}





// function findMax(arr) {
//     return Math.max(...arr);
//     debugger;
// }

// const num = [10,5,8,3,15];
// const max = findMax(num);
// console.log(max);