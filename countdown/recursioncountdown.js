// function countDown(n) { 
//     console.log(n);
//   if ( n >= 1) countDown(n - 1);  

// }
// countDown(10); -- This is counting down from 5 to 0

function countdown(myArray, n){
    if (n <= 0) 
   return;
       myArray.push(n)
       countdown(myArray, n -1)
};