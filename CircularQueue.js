class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      if(this.queue[this.write] === null) {
        this.queue[this.write++] = item
        this.write %= this.max
        return item
      }
      return null
    }
  
    dequeue() {
      if(this.queue[this.read] !== null) {
        let elem = this.queue[this.read]
        this.queue[this.read++] = null
        this.read %= this.max
        return elem
      }
      return null
    }
}