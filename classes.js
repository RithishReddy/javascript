// "1. Implement Queue using javascript class. It should have the below methods
//     * enqueue
//     * dequeue
//     * front
//     * isEmpty





class Queue{
    #queue=[]
    constructor(){
        this.#queue=[]
    }
    enqueue(elem) {
        this.#queue.push(elem);
    }
    dequeue() {
        return this.#queue.shift();
    }
    front() {
        return !this.#queue.isEmpty()? this.#queue[0] : undefined;
    }
    isEmpty() {
        return this.length === 0;
    }
}

let q= new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue();
q.front()
console.log(q)

// // 2. Explain instanceOf operator with an example."

// The instanceof operator in Javascript is used to check whether an object is an instance of a particular class or not. 


class A{
    function(){
        console.log("Hello")
    }
}

let a=new A();
console.log(a instanceof A)