// REST

const shirt = {
    size: 'M',
    color: 'red',
    brand: 'nike'
}

const { size, ...specs } = shirt;
console.log(size);
console.log(specs);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...numbers] = arr;
console.log(a, b);
console.log(numbers);

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const car = {
    model: 'uno',
    color: 'red',
}

const newCar = {...car, color: 'white'};
console.log(newCar)
