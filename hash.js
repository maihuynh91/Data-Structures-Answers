function hash(key, tableSize) {
  var hash = 0;
  for(var i = 0; i < key.length; i++){  //
    hash += key.charCodeAt(i);
  }
  // hash(key) {
  //   return key.toString().length; }
  return hash % tableSize;  
};
  
  function hashTable (){
    var storage = [];
    var tableSize = 100;
    
    this.printTb = function(){
        console.log(storage)
    }
    
    this.set = function(phone, name, customerAddress){
      var index = hash(phone, tableSize);
  
      if (storage[index] === undefined) {
        storage[index] = [ [phone, name, customerAddress] ];
      }
  };
    
    this.get = function(phone){
      var index = hash(phone, tableSize);
  
      if(storage[index] === undefined){
        return "**Empty List***";
      } else {
        for(var i = 0; i < storage[index].length; i++) {
          if(storage[index][i][0] === phone) {
           // console.log('storage index is ' + storage[index][i][0])
            return `Phone: ${storage[index][i][0]} |Name: ${storage[index][i][1]} |Add: ${storage[index][i][2]}`;
          } else {
            return "***Customer does not exist***";
          }
        }
      }
    };
  }

  let ht= new hashTable();

  ht.set("123-456-789", "Emma", "123 Street");
  ht.set("012-222-445", "Alex", "9999 Olathe, Kansas State");
  ht.set("134-554-5555", "Daniel", "321 LA");
 console.log(ht.get("123-456-789"));
 console.log(ht.get("012-222-445"));
 console.log(ht.get("134-5545"))
//  ht.printTb()