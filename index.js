function hashtable(obj) {
	this.count = 0;
	this.items = [];
}

hashtable.prototype.size = function(thing) {
	return this.count;
}

hashtable.prototype.store = function(thing) {
	this.items[thing] = thing;
	this.count++;
}

hashtable.prototype.fetch = function(thing) {
	return this.items[thing];
}

hashtable.prototype.remove = function(thing) {
	this.items[thing] = undefined;
	this.count--;
}

module.exports = new hashtable;