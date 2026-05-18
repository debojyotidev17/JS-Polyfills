Array.prototype.myReduce = function (callback, initialVal) {
  let acc = initialVal;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const arr = [10, 20, 30];

const sum = arr.myReduce((acc, element) => {
  acc += element;
  return acc;
}, 0);

console.log(sum);
