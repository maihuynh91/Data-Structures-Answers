
let head = 
function removeDuplicates(){
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
