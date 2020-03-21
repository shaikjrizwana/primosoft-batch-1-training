function Queue() {
  this.queue = [];
}
Queue.prototype.enqueue = function enqueue(val) {
  this.queue.push(val);
};

Queue.prototype.toString = function toString(stringfier) {
  if (typeof stringfier !== 'function') {
    return this.queue.toString();
  }
  const stringfiedArray = this.queue.map(stringfier);
  return stringfiedArray.toString();
};

Queue.prototype.dequeue = function dequeue() {
  return this.isEmpty() ? null : this.queue.shift();
};

Queue.prototype.peek = function peek() {
  return this.queue.length === 0 ? null : this.queue[0];
};

Queue.prototype.isEmpty = function isEmpty() {
  return this.queue.length === 0;
};
export { Queue };
