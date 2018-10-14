function hash(phoneNumber, tableNumber){
    return phoneNumber % tableNumber;
    
}

let HashTable = function(){
    let storage = [];
    const storageLimit = 14;
    this.print = function(){
        console.log(storage)
    };

    this.add = function(phone, name, address){
        let index = hash(phone,storageLimit);
        if(storage[index] === undefined){
        storage[index] = [[phone, name,address]];
            //console.log("here " + storage[index])
        }else{
            let inserted = false;
            for(let i = 0; i<storage[index].length; i++){
                if(storage[index][i][0] === phone){
                    storage[index][i][1] = name;
                    inserted= true;
                }
            }
            if(inserted===false){
                storage[index].push([phone, name,address]);
            }
        }
    };

    this.get = function(phone){
        let index = hash(phone,storageLimit);
        if(storage[index]===undefined){
            return "empty list"
        }else{
            for(let i = 0; i<storage[index].length;i++){
                if(storage[index][i][0] === phone){
                    return storage[index][i]
                } else {
                  return "Customer does not exist";
                }
            }
        }
    }
    
}

//console.log(hash('quincy', 10))
let ht = new HashTable();
//ht.add(595855899, "mai", "olathe")
ht.add(12348, "person","here")
ht.add(912325692, 'superman',"the moon")
ht.add(99999, 'okla', 'oknnnk')
ht.add(19, 'okla', 'oknnnk')
ht.print()
//ht.get(12348)
console.log("result is " + ht.get(99999));
console.log("result is " + ht.get(19));


//collision happens in this function, need to be fixed to print the value