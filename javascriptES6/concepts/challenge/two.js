const users = [
    { name: 'Diego', age: 23, employment: 'Rocketseat' },
    { name: 'Gabriel', age: 15, employment: 'Rocketseat' },
    { name: 'Lucas', age: 30, employment: 'Facebook' },
];

const ages = users.map((item) => item.age);
console.log(ages);

const rocket = users.filter((item) => item.age > 18 && item.employment == 'Rocketseat');
console.log(rocket);

const google = users.find((item) => item.employment == 'Google');
console.log(google);

const mix = users.map((item) => item.age * 2).filter((item) => item < 50);
console.log(mix);