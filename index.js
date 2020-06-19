function node(left,right){
	return ()=>[left,right]
}
class Node 
{ 
    constructor(left,right) 
    { 
        this.left = left;
        this.right = right;
    } 
}

function make_tree(depth){
	if (depth==0)
		return null
	var left=make_tree(depth-1)
	var right=make_tree(depth-1)
	//return [left,right]
	return new Node(left,right)
	//return node(left,right)
}

function count_tree(t){
	if (!t)
		return 0
	//var[left,right]=t()
	//return count_tree(left)+count_tree(right)+1
	return count_tree(t.left)+count_tree(t.right)+1
}

var tree=make_tree(24)
var size=count_tree(tree)
var used=process.memoryUsage().heapUsed
console.log('nodes',size.toLocaleString())
console.log('used',used.toLocaleString())
console.log('byes per node',used/size)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});