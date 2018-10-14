// Build a system that allows a store owner to track their store's inventory 
// using a hash table for storage.

function hash(key, tableSize){
	let hash = 0;
	for(let i = 0; i < key.length; i++){
		hash += key.charCodeAt(i);
	}
	return hash % tableSize;
}

function HashTable(){
	let storage = [];
    let tableSize = 100;

	this.set = function(item, quantity){
		let index = hash(item, tableSize);

		if(storage[index] === undefined){
			storage[index] = [ [item, quantity] ];
		}
	};

	this.get = function(item){
		let index = hash(item, tableSize);
        let id = storage[index];

		if(id === undefined){
    		return "*** Item is not found ***";
  	    } else {
    		for(var i = 0; i < id.length; i++) {
      		if(id[i][0] === item) {
        			return `There are ${id[i][1]} ${id[i][0]} in stock. `
      		} 
    		    }
    } 
  };
}

let inventory = new HashTable();
inventory.set("Veggies", "100");
inventory.set("Coke", "200");
inventory.set("Beer", "10");

console.log(inventory.get("Veggies"));
console.log(inventory.get("Coke"));
console.log(inventory.get("Beef"));
