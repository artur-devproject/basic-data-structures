var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

// HashTable based on Objects
let HashTable = function() {
    this.collection = {};
    this.add = (key, value) => {
      const hashedKey = hash(key);
      this.collection[hashedKey] = this.collection[hashedKey] || {};
      this.collection[hashedKey][key] = value;
    }
  
    this.lookup = (key) => {
      const hashedKey = hash(key);
      return this.collection[hashedKey][key];
    }
  
    this.remove = (key) => {
      const hashedKey = hash(key);
      delete this.collection[hashedKey][key];
      if (Object.keys(this.collection[hashedKey]).length == 0)
        delete this.collection[hashedKey];
    }
};

// HashTable based on Arrays
var AnotherHashTable = function() {
    this.collection = {};
    this.add = function(key, value) {
      let pair = [key, value]
      let hashedKey = hash(key)
      if(this.collection.hasOwnProperty(hashedKey)) {
          for(let elem of this.collection[hashedKey]) {
              if(key === elem[0]) {
                  elem[1] = value
                  return true
              }
          }
        this.collection[hashedKey].push(pair)
      } else {
        this.collection[hashedKey] = [pair]
      }
    }
  
    this.lookup = function(key) {
      let hashedKey = hash(key)
      let value = null
      if(this.collection[hashedKey]) {
        for(let pair of this.collection[hashedKey]) {
          if(key === pair[0]) {
            value = pair[1]
          }
        }
      }
      return value
    }
  
    this.remove = function(key) {
      let hashedKey = hash(key)
      let pair = null
      if(this.collection[hashedKey]) {
          for(let elem of this.collection[hashedKey]) {
            if(key === elem[0]) {
              pair = elem
            }
          }
          if(pair) {
            let index = this.collection[hashedKey].indexOf(pair)
            this.collection[hashedKey].splice(index, 1)
          }
          if(this.collection[hashedKey].length == 0)
            delete this.collection[hashedKey]
      }
    }
  };