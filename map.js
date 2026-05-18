Array.prototype.myMap = function (callback) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++){
        const returnValue = callback(this[i], i, this);
        returnArr.push(returnValue);
    }
    return returnArr;
}

const nums = [1, 2, 3];
const doubled = nums.myMap(num => num * 2); // 2 4 6
console.log(doubled);
