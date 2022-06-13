function Tree(value) {
    this.data = value;
    this.right = null;
    this.left = null;
}

Tree.prototype.add = function (value) {
    if (value < this.data) {
        if (this.left === null) this.left = new Tree(value);
        else this.left.add(value);
    } else {
        if (this.right === null) this.right = new Tree(value);
        else this.right.add(value);
    }
}

let tree = new Tree(50)
tree.add(20);
tree.add(70);
tree.add(30);
tree.add(65);
tree.add(18);
tree.add(82);
tree.add(45);

console.log(tree.left.right.right)


