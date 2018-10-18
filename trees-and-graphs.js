function Node(data){
    this.value = data;
    this.left = null;
    this.right = null;
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertValue(data){
        let root = this.root;
        if(root ===null){
            this.root = new Node(data);
            return;
        }

        let currentNode = root;
        let newNode = new Node(data);

        while(currentNode){
            if(data <currentNode.value){
                if(currentNode.left===null){
                    currentNode.left = newNode;
                    break;
                }else{
                    currentNode = currentNode.left;
                }
            }
            else{
                if(currentNode.right ===null){
                    currentNode.right = newNode;
                    break;
                }else{
                    currentNode = currentNode.right;
                }
            }
        };
    };

    searchValue(item){
        let temp = this.root;   
        while(temp){
            if(item === temp.value){
                return `${item} exists`;
            }
            else if(item<temp.value){
                 temp = temp.left;
             
            }else if( item>temp.value){
                 temp = temp.right
            };
        }
        return `${item} does not exist.`;
    }

    Lca(node,n1,n2){
        //let root=this.root
        if(node ===null) return null;
        if(node.value===n1 || node.value===n2) return node;
        let left = this.Lca(node.left, n1,n2);
        let right = this.Lca(node.right, n1, n2);
        if(left !== null && right !==null) return node;
        if (left===null && right===null) return null;
        return left !== null ? left : right;
    }
    pathLength(node,value){
        let len = 0;
        if(node === null || node.value === null){
            return 0;
        }
        else if(node.value === value){
        return 1;
        }
        else if( (len = this.pathLength(node.left,value))>0 || (len = this.pathLength(node.right,value))>0){
            return len + 1;
        }
        return 0;  
    }

    FindDistance(root,n1,n2){
        let x = this.pathLength(root, n1) - 1;
        let y = this.pathLength(root,n2) - 1;
        let lcaData = this.Lca(root, n1, n2).value;
        let lcaDistance = this.pathLength(root, lcaData) - 1;
        return (x+y) -2*lcaDistance;
    }
         
    
}  

let bt = new BinaryTree();
bt.insertValue(9); bt.insertValue(19);bt.insertValue(29);bt.insertValue(2);bt.insertValue(7);
bt.insertValue(1)
console.log(bt.FindDistance(bt.root, 29,2))
//console.log(bt.pathLength(bt.root,2));



