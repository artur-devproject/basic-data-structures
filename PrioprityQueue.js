function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };

    this.enqueue = function(newElem) {
      let n = this.collection.length
      if(n === 0) {
        this.collection.push(newElem)
      } else {
        for(let i=n-1; i>=0; i--) {
            if(newElem[1] >= this.collection[i][1]) {
              this.collection.splice(i+1, 0, newElem)
              break
            } else {
              if(i === 0) {
                this.collection.unshift(newElem)
              } else {
                continue
              }
            }
        }
      }
      
    }
  
    this.dequeue = function() {
      let front = this.collection.shift()
      return front[0]
    }
  
    this.size = function() {
      return this.collection.length
    }
  
    this.front = function() {
      return this.collection[0][0]
    }
  
    this.isEmpty = function() {
      return this.collection.length === 0
    }
}