var depth=27
function dict(){	
	function make_tree(depth){
		if (depth==0)
			return null
		var left=make_tree(depth-1)
		var right=make_tree(depth-1)
		return {left,right}
	}

	function count_tree(t){
		if (!t)
			return 0
		return count_tree(t.left)+count_tree(t.right)+1
	}

	var tree=make_tree(depth)
	var size=count_tree(tree)

	return [tree,size]
}
function dict_depth(){	
	function make_tree(depth){
		if (depth==0)
			return null
		var left=make_tree(depth-1)
		var right=make_tree(depth-1)
		return {left,right,depth}
	}

	function count_tree(t){
		if (!t)
			return 0
		return count_tree(t.left)+count_tree(t.right)+1
	}

	var tree=make_tree(depth)
	var size=count_tree(tree)

	return [tree,size]
}

function dict_name_access(){	
	function make_tree(depth){
		if (depth==0)
			return null
		var left=make_tree(depth-1)
		var right=make_tree(depth-1)
		return {left,right}
	}

	function count_tree(t){
		if (!t)
			return 0
		return count_tree(t['left'])+count_tree(t['right'])+1
	}

	var tree=make_tree(depth)
	var size=count_tree(tree)

	return [tree,size]
}

function cls(){
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
		return new Node(left,right)
	}

	function count_tree(t){
		if (!t)
			return 0
		return count_tree(t.left)+count_tree(t.right)+1
	}
	var tree=make_tree(depth)
	var size=count_tree(tree)

	return [tree,size]		
}
function array(){	
	function make_tree(depth){
		if (depth==0)
			return null
		var left=make_tree(depth-1)
		var right=make_tree(depth-1)
		return [left,right]
	}

	function count_tree(t){
		if (!t)
			return 0
		return count_tree(t[0])+count_tree(t[1])+1
	}

	var tree=make_tree(depth)
	var size=count_tree(tree)

	return [tree,size]
}
function get_time(){
	var d = new Date();
	var n = d.getTime();
	return n
}
function runit(name,f){
	global.gc()
	var start=get_time()
	var [tree,size]=f()
	var total=get_time()-start
	var used=process.memoryUsage().heapUsed	
	console.log(name)
	console.log('nodes',size.toLocaleString())
	console.log('used',used.toLocaleString())
	console.log('time ms',total.toLocaleString())
	console.log('byes per node',Math.floor(used/size).toLocaleString())
	console.log('nodes per sec',Math.floor(1000*size/total).toLocaleString())
	console.log('----------')
}
function run_all(){	
	console.log('====================================')
	runit('dict_depth',dict_depth)
	runit('dict',dict)
	runit('cls',cls)
	runit('dict_name_access',dict_name_access)
	runit('array',array)
}
run_all()
run_all()