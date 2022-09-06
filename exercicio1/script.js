//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []
console.log(sacolao)

//Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
//nome: string;
//preco: number;
//disponibilidade: boolean;

const fruta1 = {
    nome: "melancia",
    preço: 18.99,
    disponibilidade: true
}
const fruta2 = {
    nome: "abacate",
    preço: 5.80,
    disponibilidade: true
}
const fruta3 = {
    nome: "banana",
    preço: 3.75,
    disponibilidade: false
}

//Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1, fruta2, fruta3)

//Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)

