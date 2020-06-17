// // 3.1
// arr.map(function(item) {
//  return item + 10;
// });

const arr = [1, 2, 3, 4, 5];
arr.map((item) => {
    return item + 10;
});



// 3.2
// Dica: Utilize uma constante pra function
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// mostraIdade(usuario);
const user = { name: 'Diego', age: 23 };

const showAge = (item) => {
    return item.age;
};
console.log(showAge(user));



// 3.3
// Dica: Utilize uma constante pra function
// function mostraUsuario(name = 'Diego', age = 18) {
    //  return { name, age };
    // }
    // mostraUsuario(name, age);
    // mostraUsuario(name);
const name = "Diego";
const age = 23;

const showUser = (name = 'Diego', age = 18) => {
    return {name, age};
}

console.log(showUser(name, age));
console.log(showUser(name));



// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
//    }

const promisse = () => {
    return new promisse((resolve, reject) => {
        return resolve();
    })
}