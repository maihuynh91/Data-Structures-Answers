// Implement the pop method of a stack using one queue. Make a FIFO data structure mirror the 
// functionality of a LIFO data structure. Since the internal list is not the same as defined 
// in the checkpoint, it may help to rewrite the pseudocode first.

let array = [1,2,3,4,5,6];

function implementingPopMethod(array){
    if(array.length === 0){
        return false
    };

    let removedItem="", newArray=[]
    for(let i = 0; i<array.length;i++){
        if(i !== array.length-1){
            newArray.push(array[i]);
        } else{
            removedItem += array[i];
        }
    } 
       return `Removed item is ${removedItem}.`

}


console.log(implementingPopMethod(array))


