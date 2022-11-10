// Write method that accepts a VALUE and createa  new node, assign it to the list head, and return a pointer to the new head node

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let new_node = new Node(value);
        if (!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;

        this.head = new_node;
        return this;
    }
    removeFront() {
        this.head = this.head.next;
        return this.head;
    }
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        }

    }
    display() {
        var listStr = "";
        if (this.head == null) {
            return "";
        }
        listStr += this.head.value;
        var runner = this.head.next;
        while (runner != null) {
            listStr += ", " + runner.value;
            runner = runner.next;
        }
        return listStr
    }

}


SLL1 = new SLL();
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));

console.log("Removing Portion________________________________________________");
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());

console.log("Front Portion______________");
console.log(SLL1.front());
console.log(SLL1.display());