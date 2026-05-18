Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const myArr = [1, 2, 3];
const val = myArr.myForEach((ele, idx, arr) => {
  console.log(ele, idx, arr);
});
console.log(val);
