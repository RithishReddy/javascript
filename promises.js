// "1. Briefly explain different Promise states.

/*Promises are used to handle asynchronous operations in JavaScript. 
 They are easy to manage when dealing with multiple asynchronous operations ,
 where callbacks can create complexity.
   promises consists of three states.
   pending: initial state, neither fulfilled nor rejected.
   fulfilled: meaning that the operation was completed successfully.
   rejected: meaning that the operation failed.


   */




// 2. Using promise to create a delayedLowerCase function which will transform a string to lower case after 5 seconds. 
//Ex Input: ""BEAUTIFUL CODE"" Output: ""beautiful code""

const lowerCase=(str)=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof str==='string'){
        resolve(
            str.toLowerCase()
        )}
        else{
            reject('Failed to convert')
        }
      }, 1000);
    });
  }
  

let value;
  
  const promise = lowerCase('BEAUTIFUL CODE');
  promise.then(name=>{ value=name;
    console.log(name)})
  .catch((error)=>console.log(error));

console.log(value)



// 3. Briefly explain Promise Chaining. For the above created delayedLowerCase function chain a promise which will print the string and its length: Ex: Input: ""Beautiful Code""  Output: ""beautiful code - 14"""

const delayedLowerCase=(str)=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof str==='string'){
        resolve(
            str.toLowerCase()
        )}
        else{
            reject('Failed to convert')
        }
      }, 5000);
    });
  }
  


  
  const promise1 = delayedLowerCase('BEAUTIFUL CODE');
  promise1.then(name=>{
    
    return  name})
  .then(name=>console.log(`${name} - ${name.length}`))
  .catch((error)=>console.log(error));