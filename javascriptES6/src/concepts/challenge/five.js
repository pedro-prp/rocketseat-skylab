// 5.1 REST
// 5.1.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x);
console.log(y);

// 5.1.2
function sum(...items) {
    return items.reduce((next, total) => total + next);
}

console.log(sum(1, 2, 3, 4));

// 5.2 SPREAD

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
console.log(usuario2);

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
console.log(usuario3);
