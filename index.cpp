
#include <stdio.h>      /* printf */
#include <time.h> 
#include <chrono>
class Node{
public:
	Node *left,*right;
};

Node* make_tree(int depth){
	if (depth == 0)
		return 0;
	Node *left=make_tree(depth-1);
	Node *right=make_tree(depth-1);
	Node *ans=new Node;
	ans->left=left;
	ans->right=right;
	return ans;
}

int count_tree(Node *t){
	if (!t)
		return 0;
	return count_tree(t->left) + count_tree(t->right) + 1;
}
void free_tree(Node* t) {
	if (!t)
		return;
	free_tree(t->left);
	free_tree(t->right);
	delete t;
}
void main(){
	using namespace std::chrono;

	high_resolution_clock::time_point t1 = high_resolution_clock::now();

	Node* tree = make_tree(27);
	int num_nodes = count_tree(tree);
	high_resolution_clock::time_point t2 = high_resolution_clock::now();
	duration<double> total = (t2 - t1);
	printf("count=%d,nodes per sec=%f", num_nodes, num_nodes / total.count());
	getchar();
	free_tree(tree);
}