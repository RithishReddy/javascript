// "1. Write a function which takes an object as input and print out its properties

const details={
    name:'rithish',
    age:21,
    mobile:23456
}


for(let i in details){
    console.log(i)
}

console.log(Object.keys(details))



// 2. How to delete property 'a' from object x={'a':1,'b':2}

// we can use delete keyword to delete a pairs in objects

x={'a':1,'b':2}

delete x.a;
console.log(x)




// 3. Given x = {a:'1'}; y = x; does changing y.a change x.a? why? (looking for the answer - objects are pass by reference)

x = {a:'1'};

y = x;

y.a=12;

console.log(y.a)  // prints 12 . Because objects are pass by reference


// 4. Copy x = {'a':1} to a variable y without creating a reference to x


//assign() method is used to copy all enumerable values from a source object to the target object. 
const x1 = {a:'1'};

const y1=Object.assign({},x1);
console.log(y1)


// 5. Write a function to check if two objects are equal"

const equals=(x,y)=>{
    for(let key1 in x){
        if(x[key1]!==y[key1]){
            return false
        }
    }
    for(let key2 in y){
        if(x[key2]!==y[key2]){
            return false
        }
    }
    return true
}


const x={a:1,b:"hii"};
const y={a:1,b:"hii"};

console.log(equals(x,y));