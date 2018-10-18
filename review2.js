
class HashMap{
    constructor(tableSize=20){
        this.buckets = new Array(tableSize);
        this.collisions = 0;
    };

    hash(key){
        let hashValue=0;
        let stringTypeKey = `${key} ${typeof key}`;
        for(let i = 0; i<stringTypeKey.length;i++){
            let charCode = stringTypeKey.charCodeAt(i);
            hashValue += charCode << (i * 8)
        }
        return hashValue;
    };

    getIndex(key){
        let indexHash = this.hash(key);
        let index = indexHash % this.buckets.length;
        return index;
        
    };

    set(key, value, address){
        let bucketIndex = this.getIndex(key);
        if(this.buckets[bucketIndex]===undefined){
            this.buckets[bucketIndex] = [{key, value, address}];
        }else{
            this.buckets[bucketIndex].push({key, value,address});
            if(this.buckets[bucketIndex].length>1){this.collisions++};
        }
        return this;
    }

    get(key){
        let bucketIndex = this.getIndex(key);
        for(let i = 0; i<this.buckets[bucketIndex].length;i++){
            let entry = this.buckets[bucketIndex][i];
           
            if (entry.key === key){
                return entry;
            }
        }
    }




}

