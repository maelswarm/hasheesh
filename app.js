#!/usr/bin/env node

var hashtable = require('./index.js')
var tmp = {"a": "apple", "b": "banana"};
hashtable.store(tmp)
console.log(hashtable.fetch("a"));
console.log(hashtable.hasitem("d"));
console.log("Size: "+hashtable.size());
