const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mapArr = arr.map((item, index) => {
    return item * index;
});
console.log(mapArr);


const sumArr = arr.reduce((sum, next) => sum + next);
console.log(sumArr);


const filterArr = arr.filter(item => item % 2 == 0);
console.log(filterArr);


const findArr = arr.find(item => {
    return item === 4;
});
console.log(findArr);