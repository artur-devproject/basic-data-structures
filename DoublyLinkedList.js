const Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};

const DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    
    this.add = (element) => {
        const newNode = new Node(element, null)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    this.remove = (element) => {
        if(!this.head) {
            return null
        } else if(this.head === this.tail) {
            if(element === this.head.data) {
                this.head = this.tail = null
            } else {
                return null
            }
        } else if(element === this.head.data) {
            this.head.next.prev = null
            this.head = this.head.next
        } else if(element === this.tail.data) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else {
            let currentNode = this.head.next
            while(element !== currentNode.data) {
                currentNode = currentNode.next
            }
            if(element === currentNode.data) {
                currentNode.prev.next = currentNode.next
                currentNode.next.prev = currentNode.prev
            } else {
                return null
            }
        }
    }

    this.reverse = () => {
        if(!this.head) {
            return null
        } else {
            let currentNode = this.head
            while(currentNode) {
                let prev = currentNode.prev
                let next = currentNode.next
                currentNode.prev = next
                currentNode.next = prev
                currentNode = currentNode.prev
            }
            let newHead = this.tail
            let newTail = this.head
            this.head = newHead
            this.tail = newTail
        }
    }
};