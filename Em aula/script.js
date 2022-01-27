// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
// Mostre no console todas as propriedades desse objeto

const pessoa = {
   nome: 'Mateus',
   idade: 22,
   cidade: 'Rio de Janeiro' 
}

pessoa.aluno = true
delete pessoa.cidade

console.log(pessoa)