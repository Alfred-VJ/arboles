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

Tree.prototype.preorder = function (contenedor = []) {
    contenedor.push(this.data);
    if (this.left !== null) this.left.preorder(contenedor);
    if (this.right !== null) this.right.preorder(contenedor);

    return contenedor;
}

Tree.prototype.inorder = function (contenedor = []) {
    if (this.left !== null) this.left.inorder(contenedor);
    contenedor.push(this.data);
    if (this.right !== null) this.right.inorder(contenedor);

    return contenedor;
}

Tree.prototype.postorder = function (contenedor = []) {
    if (this.left !== null) this.left.postorder(contenedor);
    if (this.right !== null) this.right.postorder(contenedor);
    contenedor.push(this.data)

    return contenedor
}

Tree.prototype.porNiveles = function (contenedor = [], contTree = []) {
    contenedor.push(this.data);
    if (this.left !== null) contTree.push(this.left);
    if (this.right !== null) contTree.push(this.right);

    if (contTree.length !== 0) {
        contTree.shift().porNiveles(contenedor, contTree)
    }

    return contenedor;
}

let tree = new Tree(50)
tree.add(20);
tree.add(70);
tree.add(30);
tree.add(65);
tree.add(18);
tree.add(82);
tree.add(45);

console.log(tree.preorder())
console.log(tree.inorder())
console.log(tree.postorder())
console.log(tree.porNiveles())


