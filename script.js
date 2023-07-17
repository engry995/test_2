class BinaryTreeNode {
    constructor(value) {
<<<<<<< HEAD
        this.le = null;
        this.ri = null;
=======
        this.l = null;
        this.r = null;
>>>>>>> origin/fix_crit_bug
        this.parent = parent;
        this.value = value;
    }

    get height() {
<<<<<<< HEAD
        let leftHeight = this.le ? this.le.height + 1 : 0;
        let rightHeight = this.ri ? this.ri.height + 1 : 0;
=======
        let leftHeight = this.l ? this.l.height + 1 : 0;
        let rightHeight = this.r ? this.r.height + 1 : 0;
>>>>>>> origin/fix_crit_bug
        return Math.max(leftHeight, rightHeight);
    }
}

<<<<<<< HEAD
function traverseDFR(node, callback) {
    callback(node);

    if (node.le) {
        traverseDFR(node.le, callback);
    }

    if (node.ri) {
        traverseDFR(node.ri, callback);
=======
function traverseDFRecursivity(node, callback) {
    callback(node);

    if (node.l) {
        traverseDFRecursivity(node.l, callback);
    }

    if (node.r) {
        traverseDFRecursivity(node.r, callback);
>>>>>>> origin/fix_crit_bug
    }
}

function traverseDF(root, callback) {
<<<<<<< HEAD
    traverseDFR(root, callback);
=======
    traverseDFRecursivity(root, callback);
>>>>>>> origin/fix_crit_bug
}
