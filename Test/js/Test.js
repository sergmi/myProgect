function BinarySearchTree(){
	this._root=null;
}

var current;
var found;
var node;
BinarySearchTree.prototype={
	constructor: BinarySearchTree,

	add: function (){
			node = {
                value: value,
                left: null,
                right: null
			};
//			current;
		alert("node value="+node.value);
//		alert("this._root="+this._root);
		
		if (this._root === null){
            this._root = node;
        } else {
            current = this._root;
			while(true){               
                if (value < current.value){
                    if (current.left === null){
                        current.left = node;
						
//						alert("current.left.value="+current.left.value);
						
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
			}
		}
//		alert("this._root.value="+this._root.value);
	},
	
	contains: function (){
			found=false,			
			current=this._root;
//			alert("progress");
			
		while(!found&&current){
			if(value<current.value){
				current=current.left;
			}
			else if (value>current.value){
				current=current.right;
			}
			else {
				found=true;
			}
		}
		if(found){alert("value "+value+"  is present")}
		else{alert("value "+value+"  not present")};
//		return found;
	},
	
/////	
	traverse: function (process){
		alert("process working");
        //helper function
        function inOrder(node){
			alert("inOrder working");
			alert("node.value= "+node.value);
            if (node){

                //traverse the left subtree
                if (node.left !== null){
                    inOrder(node.left);
                }            

                //call the process method on this node
				alert("this = "+this);
                process.call(this, node);

                //traverse the right subtree
                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }
		alert("this._root = "+this._root+"      BST._root = "+BST._root)
        //start with the root
        inOrder.call(this, this._root);
    },

		
/////

/*	traverse: function process(){
//		var node;
		alert("process working");
        function inOrder(){
			alert("inOrder working");
			alert("node.value= "+node.value);
			
			if (node){
				
                if (node.left !== null){
					alert("node.left.value= "+node.left.value);
                    node=node.left;
					inOrder();
                }            

                process.call(this, node);

                if (node.right !== null){
					alert("node.right.value= "+node.right.value);
					node=node.right;
                    inOrder();
                }
            }
        }
//		alert("this._root.value= "+this._root.value);
        node=this._root;
		inOrder();
    }
*/	
	
	
/*	traverse: function process(){
		var someNode;
		alert("process working");
        function inOrder(){
			alert("inOrder working");
			alert("someNode.value= "+someNode.value);
			
			if (someNode){
				
                if (someNode.left !== null){
					alert("someNode.left.value= "+someNode.left.value);
                    someNode=someNode.left;
					inOrder();
                }            

//                process.call(this, node);

                if (someNode.right !== null){
					alert("someNode.right.value= "+someNode.right.value);
					someNode=someNode.right;
                    inOrder();
                }
            }
        }
		alert("this._root.value= "+this._root.value);
        someNode=this._root;
		inOrder();
    }
*/	
		
}

var value=11;

var BST= new BinarySearchTree();
BST.add();
alert("working");

var value=22;
BST.add();
//alert("current.left.value="+current.left.value);

var value=33;
BST.add();
//alert("current.right.value="+current.right.value);

var value=44;
BST.contains();
alert("found="+found);

BST.traverse();




alert("done");
