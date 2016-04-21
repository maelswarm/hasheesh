# hasheesh
Easy hashing

## Install ##
```
npm install hasheesh
```

## Usage ##
````
var hashtable = require('hasheesh')
var obj = {"a": "apple", "b": "banana", "c": "cherry"};
hashtable.store(obj)
hashtable.remove("c")
console.log(hashtable.fetch("a"));
console.log("Size: " + hashtable.size());
````
