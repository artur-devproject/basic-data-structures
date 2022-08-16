function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = (element)=> {

      let node = new Node(element)
      if(this.size() === 0) {
        head = node
      } else {
        let nextNode = node => node.next ? nextNode(node.next) : node
        let lastNode = nextNode(head)
        lastNode.next = node
      }
      length++
    };

    this.remove = function(element) {
        if(head.element === element) {
          head = head.next
        } else {
          let currentNode = head
          let nextNode = head.next
          while(nextNode.element !== element) {
            currentNode = currentNode.next
            nextNode = nextNode.next
          }
          currentNode.next = nextNode.next
        }
        length--
    };

    this.isEmpty = () => {
        return this.size() === 0
      }
    
    this.indexOf = (element) => {
        let index = -1
        if(!this.isEmpty()) {
          let currentNode = head
          while(currentNode) {
            index++
            if(currentNode.element === element) {
              return index
            }
            currentNode = currentNode.next
          }
        }
        return -1
    }
    
    this.elementAt = (index) => {
        if(this.size() > index) {
          let currentNode = head
          while(index > 0) {
            currentNode = currentNode.next
            index--
          }
          return currentNode.element
        }
        return undefined
    }

    this.removeAt = (index) => {
      if(index >= 0 && index < this.size()) {
        let previousNode = null
        let deletedNode = head
        if(index === 0) {
          head = head.next
        } else {
          while(index > 0) {
            previousNode = deletedNode
            deletedNode = deletedNode.next
            index--
          }
          previousNode.next = deletedNode.next
        }
        length--
        return deletedNode.element
      }
      return null
    }

    this.addAt = (index, element) => {
      if(index >= 0 && index <= length) {
        const newNode = new Node(element)
        if(index === 0) {
          newNode.next = head
          head = newNode
        } else {
          let previousNode = head
          while(index > 1) {
            previousNode = previousNode.next
            index--
          }
          newNode.next = previousNode.next
          previousNode.next = newNode
        }
        length++
        return true
      }
      return false
    }
}