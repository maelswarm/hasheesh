function hashtable(obj) {
	this.count = 0;
	this.items = [];
}

hashtable.prototype.size = function(thing) {
	return this.count;
}

hashtable.prototype.store = function(obj) {
	for(var x in obj) {
		this.items[x] = obj[x];
		this.count++;
	}
}

hashtable.prototype.fetch = function(key) {
	return this.items[key];
}

hashtable.prototype.remove = function(key) {
	this.items[key] = undefined;
	this.count--;
}

hashtable.prototype.hasitem = function(key) {
	return this.items.hasOwnProperty(key);
}

module.exports = new hashtable;