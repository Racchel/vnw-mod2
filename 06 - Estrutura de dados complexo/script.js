const pessoa = {
   nome: 'Racchel',
   idade: 19,
   cidade: 'Presidente Figueiredo' 
}

pessoa.aluno = true
delete pessoa.cidade

console.log(pessoa)
console.log('--------')

const cadastro = [
   {
      nome: 'Luis',
      idade: 18,
      telefone: '92 99712-1233',
      amigos: [
         'João',
         'Maria',
         'Carlos',
         'Bia'
      ]
   },
   {
      nome: 'Miguel',
      idade: 19,
      telefone: '92 99345-6644',
      amigos: [
         'Helena',
         'Alice',
         'Vitoria',
         'Bernardo'
      ]
   },
   {
      nome: 'Mariana',
      idade: 16,
      telefone: '92 99235-6899',
      amigos: [
         'Diana',
         'Elom',
         'Derick',
         'Bruna'
      ]
   },
   {
      nome: 'Heloísa',
      idade: 20,
      telefone: '92 99100-4321',
      amigos: [
         'Gael',
         'Fábio',
         'Luana',
         'Linda'
      ]
   },
   {
      nome: 'Jussara',
      idade: 22,
      telefone: '92 98234-4422',
      amigos: [
         'Theo',
         'Felipe',
         'Fábio',
         'Amanda'
      ]
   },
];

for (let i = 0; i < cadastro.length; i++) {
   console.log(`Os amigos de ${cadastro[i].nome} são: `)
   console.log(cadastro[i].amigos)
   console.log(`O melhor amigo é ${cadastro[i].amigos[1]}`)
   console.log('--------')
}