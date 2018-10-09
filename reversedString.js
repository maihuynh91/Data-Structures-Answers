

function reverseString(originalString){
    let newStack=[], reversedString="", count=0;
    newStack.push(...originalString);
    let len = newStack.length
    
    while (count < len){
        let character = newStack.pop();
        reversedString+= character
        count++;        
    }
    return reversedString

}

console.log(reverseString('Bloc!'))