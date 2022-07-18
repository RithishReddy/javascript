


function myFilter(my_array, callback){
   
    let result = [];
 for (let number of my_array) {
   if (callback(number)) 
     result.push(number);
   
 }
 return result;
}

 
 
 


function processData(inputArray) {
   //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
   console.log(myFilter(inputArray,x=>x%2===0));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
  processData(_input.split(' ').map(num => Number(num)));
});