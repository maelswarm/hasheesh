#!/usr/bin/env node

var hashtable = require('./index.js')
var tmp = {"a": "apple", "b": "banana"};
hashtable.store("hello")
hashtable.store(4)
hashtable.store(tmp)
console.log(hashtable.fetch("hello"));
console.log(hashtable.fetch(4));
console.log(hashtable.fetch(tmp)["b"]);
console.log("Size: "+hashtable.size());