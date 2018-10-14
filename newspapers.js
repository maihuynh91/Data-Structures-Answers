  function hash(key, size){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % size;
    }

  function dataHashTable(){
    let storage = [];
    let tableSize = 100;

    this.set = function(publisher, date, article){
      let index = hash(date, tableSize);
      if(storage[index] === undefined){
        storage[index] = [ [publisher, date, article] ];
      }
    };

    this.get = function(date){
      let index = hash(date, tableSize);

      if(storage[index] === undefined) {
          return "Newspapers list is empty";}
      else {
          for(let i = 0; i < storage[index].length; i++) {
            if(storage[index][i][1] === date) {
                return `Publisher ${storage[index][i][0]}  date published: ${storage[index][i][1]} article ${storage[index][i][2]}`;
            } 
            else {
              return "Not Found";}
              }
            };
                              };
          }

  function publisherHashTable(){
    let storage = [];
    let tableSize = 100;

    this.set = function(publisher, date, article){
      let index = hash(publisher, tableSize);

      if(storage[index] === undefined){
        storage[index] = [ [publisher, date, article] ];
                                      }
                };

    this.get = function(publisher){
      let index = hash(publisher, tableSize);
      
      if(storage[index] === undefined) {
          return "The publisher list is empty";} 
      else {
        for(let i = 0; i < storage[index].length; i++) {
          if(storage[index][i][0] === publisher) {
            return `Publisher ${storage[index][i][0]} date published: ${storage[index][i][1]} article: ${storage[index][i][2]}`}
          else {
            return "Not Found";
            }
          };
            }
    };
  }


  let newspaper = new publisherHashTable();
  let newspaperDate = new dataHashTable();

  newspaper.set("AAAA", "12.Dec", "aaaaaaaaaaaaaaaaaaa");
  newspaper.set("BBBBBBBBBB", "2018", "bbbbbbbbbbb");

  newspaperDate.set("AAAA", "12.Dec", "aaaaaaaaaaaaaaaaaaa");
  newspaperDate.set("BBBBBBBBBB", "2018", "bbbbbbbbbbb");
  newspaperDate.set("CCCC", "12.Dec", "aaaaaaaaaaaaaaaaaaa");


  console.log(newspaper.get("AAAA"));
  console.log(newspaperDate.get("2018"));
  console.log(newspaperDate.get("2019"));