let arr = [5, 3, 8, 1];
 
let newArr;
function filterRange(arr, a, b){
newArr = arr.filter(item => item >= a && item <= b);
return(newArr);
}
filterRange(arr, 1, 4);