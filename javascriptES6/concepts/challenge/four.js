// 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado} } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);


// 4.2
function showInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

const user = {
    nome: 'Diego',
    idade: 23 
}
console.log(showInfo(user));
