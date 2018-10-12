
class LinkedList{
    constructor(){
        this.head = null;
    
    };

    addElement(value){
        let node={
        value: value,
        next: null
    };
        if(!this.head){
            this.head =  node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;         
            }current.next = node;         
        }; 
            return node;
            };

    printLinkedLIst(){
        let current = this.head;
        let string = "";
        while(current){
            string += current.value + " "
            current = current.next
        } console.log(string.trim())
    };

    removeDuplicates(){
        if(this.head == null || this.head.next==null)return;
        let nodes={};
        let current = this.head, next = current.next;
        nodes[current.value] = true;
        while(current.next){
            let temp = next.value;
            if(nodes[temp]){
                current.next = next.next;
            }
            else{
                nodes[temp] = true;
                current= next;
            }
            next = next.next;
        }
    };

    reverseList() {
        let current = this.head, next = null,  previous = null;
  
        while(current) {
            next = current.next;    
            current.next = previous;      
            previous = current;
            current = next;
        }
        this.head = previous;
        }
        
}

let ll = new LinkedList;
ll.addElement(11); ll.addElement(11); ll.addElement(123)
ll.addElement(13); ll.addElement(11); ll.addElement(99); ll.addElement(55555);
ll.addElement(99); ll.addElement(55555);ll.addElement(55555);ll.addElement(55555);
ll.addElement(99);ll.addElement(55555)

ll.removeDuplicates()
ll.printLinkedLIst()
ll.reverseList();
ll.printLinkedLIst()
