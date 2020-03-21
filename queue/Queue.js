
function Queue() {
  this.elements = [];
}
Queue.prototype.peek = function () {
  if (!this.isEmpty()) {
    return this.elements[0];
  }
};
Queue.prototype.enqueue = function (ele) {
  return this.elements.push(ele);
};
Queue.prototype.dequeue = function () {
  return this.elements.shift();
};
Queue.prototype.isEmpty = function () {
  return this.elements.length === 0;
};
Queue.prototype.toString = function () {
  return this.elements.toString();
};
export {
  Queue,
};
