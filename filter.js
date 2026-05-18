Array.prototype.myFilter = function (callback) {
    const ans = [];
    let returnValue = false;
    for (let i = 0; i < this.length; i++) {
      returnValue = callback(this[i], i, this);
    if (returnValue == true) {
      ans.push(this[i]);
    }
  }
  return ans;
};

const arr = [10, 20, 30, 40];

const result = arr.myFilter((element, index, array) => {
  return element > 20; // [30,40]
});

console.log(result);
