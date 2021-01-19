function run() {
   const input = document.getElementById("input").value;
   const output = document.getElementById("output");
   let out = "";
 
   function find(arr, number) {
     let first = 0,
     last  = arr.length - 1,
     middle = Math.floor((last+ first)/2);
 
     while(arr[middle] != value && first< last) {
       if (value < arr[middle]) {
         last= middle - 1;
       } else if (value > arr[middle]) {
         first= middle + 1;
       }
       middle= Math.floor((last+ first)/2);
     }
 
     return (arr[middle] != value) ? -1 : middle;
   }
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   out = find(arr, 4);
   output.innerText = out;
 }