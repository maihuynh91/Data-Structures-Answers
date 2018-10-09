
class Queue{
    constructor(){
        this.array =  [];
    };

    isEmpty(){
        return this.array.length === 0;
    }
  
    dequeue(element){
        if(this.isEmpty()){
            return  "Empty!";
        };
        this.array.shift(element);
        console.log(this.array ) 
    }

    enqueue(element){
        this.array.push(element);
        return this.array;     
    };

    printQueue(){
        console.log(this.array);
    };

}

let newQueue = new Queue();
newQueue.enqueue(99);
newQueue.enqueue(10);
newQueue.enqueue(88);
newQueue.enqueue(9999);
newQueue.enqueue(98);
newQueue.dequeue()
//newQueue.printQueue();




