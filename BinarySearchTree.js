function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    this.add = (value) => {
        const newNode = new Node(value)
        if(!this.root) {
        this.root = newNode
        return undefined
        }

        let currentNode = this.root
        while(currentNode) {
            if(newNode.value === currentNode.value) return null
            
            let child = newNode.value > currentNode.value ? "right" : "left"
            if(!currentNode[child]) {
                currentNode[child] = newNode
                return undefined
            }
            
            currentNode = currentNode[child]
        }
    }

    this.findMin = function() {
      if(!this.root) return null
  
      let currentNode = this.root
      while(currentNode) {
        if(!currentNode.left) return currentNode.value
        currentNode = currentNode.left
      }
    }
  
    this.findMax = function() {
      if(!this.root) return null
  
      let currentNode = this.root
      while(currentNode) {
        if(!currentNode.right) return currentNode.value
        currentNode = currentNode.right
      }
    }

    this.isPresent = function(value) {
      if(!this.root) return false
  
      let currentNode = this.root
      while(currentNode) {
        if(currentNode.value === value) return true
        let child = value > currentNode.value ? "right" : "left"
        if(!currentNode[child]) return false
        currentNode = currentNode[child]
      }
    }

  this.findMinHeight = function() {

    function findNodeMinHeight(node) {
      if(!node) return 0
      return 1 + Math.min(
        findNodeMinHeight(node.left),
        findNodeMinHeight(node.right)
      )
    }

    return findNodeMinHeight(this.root) - 1
  }

  this.findMaxHeight = function() {
    
    function findNodeMaxHeight(node) {
      if(!node) return 0

      return 1 + Math.max(
        findNodeMaxHeight(node.left),
        findNodeMaxHeight(node.right)
      )
    }

    return findNodeMaxHeight(this.root) - 1
  }

  this.isBalanced = function() {
    return this.findMaxHeight() == this.findMinHeight()
  }

  // Depth First Search

  this.preorder = function() {
    if(!this.root) return null

    const result = []
    const getValue = (node) => {
      result.push(node.value)
      if(node.left) getValue(node.left)
      if(node.right) getValue(node.right)
    }
    
    getValue(this.root)
    return result
  }

  this.postorder = function() {
    if(!this.root) return null

    const result = []
    const getValue = (node) => {
      if(node.left) getValue(node.left)
      if(node.right) getValue(node.right)
      result.push(node.value)
    }

    getValue(this.root)
    return result
  }

  this.inorder = function() {
    if(!this.root) return null

    const result = []
    
    const getValue = (node) => {
      if(node.left) getValue(node.left)
      result.push(node.value)
      if(node.right) getValue(node.right)
    }

    getValue(this.root)
    return result
  }

  // Breadth First Search

  this.levelOrder = function() {
    if(!this.root) return null

    let result = []
    let levelQueue = []

    levelQueue.push(this.root)
    while(levelQueue.length !== 0) {
      let values = []
      let childs = []
      for(let node of levelQueue) {
        values.push(node.value)
        if(node.left) childs.push(node.left)
        if(node.right) childs.push(node.right)
      }
      result = [...result, ...values]
      levelQueue = childs
    }

    return result
  }

  this.reverseLevelOrder = function() {
    if(!this.root) return null

    let result = []
    let levelQueue = []

    levelQueue.push(this.root)
    while(levelQueue.length !== 0) {
      let values = []
      let childs = []
      for(let node of levelQueue) {
        values.push(node.value)
        if(node.left) childs.push(node.left)
        if(node.right) childs.push(node.right)
      }
      result = [...result, ...values.reverse()]
      levelQueue = childs
    }

    return result
  }

  // Remove operations

  this.remove = function(value) {
    if(!this.root) return null

    if(this.root.value === value) {
      if(!this.root.left && !this.root.right) {
        this.root = null
        return true
      } else {
        return null
      }
    }

    const isLeaf = (child) => {
      if(!child.left && !child.right) return true
      return false
    }
    
    let removed = null

    const examChilds = (node) => {
      if(node.left) {
        if(node.left.value === value) {
          if(isLeaf(node.left)) {
            node.left = null
            removed = true
            return
          }
        } else {
          examChilds(node.left)
        } 
      }
      
      if(node.right) {
        if(node.right.value === value) {
          if(isLeaf(node.right)) {
            node.right = null
            removed = true
            return
          }
        } else {
          examChilds(node.right)
        } 
      }
    }

    examChilds(this.root)

    return removed
  }
}

function isBinarySearchTree(tree) {
  if(!tree.root) return false

  const check = (node) => {
    let checkLeft = true
    let checkRight = true

    if(node.left) {
      checkLeft = node.left.value >= node.value ? false : check(node.left)
    }

    if(node.right) {
      checkRight = node.right.value <= node.value ? false : check(node.right)
    }

    return checkLeft && checkRight
  }
  
  return check(tree.root)
}