class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add(element) { // add element at the end of the list
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            const current  = this.head;     
            while (current.next) {
                current = current.next;
            };
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {

        if (index > 0 && index > this.size) return false;
        
        const node = new Node(element);
        let curr, prev;

        curr = this.head;

        if (index === 0) {
            this.head = node;
            this.node = curr;
        } else {
            curr = this.head;
            let i = 0;
            while (i < index) {
                i++;
                prev = curr
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
        size++;
    }

    removeFrom(index) {
        if (index > 0 && index > this.size) return -1;
        let curr, prev;

        curr = this.head;
        
        if (index === 0) {
            this.head = curr.next;
        } else {
            curr = this.head;
            let i = 0;
            while (i < index) {
                i++;
                prev = curr
                curr = curr.next;
            };
            prev.next = curr.next;
        }
        this.size--;
        
        return curr.data; // return remove item
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.data === data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data === element) {
                return index;
            } else {
                current = current.next;
                index++;
            }
        }
        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        let listString = '';
        let current = this.head;

        while (current !== null) {
            listString += current.data;
            current = current.next;
        }

        console.log(listString);
    }
}