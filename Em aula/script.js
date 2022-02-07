// /////////////////// IF

// //1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão retorne no console que ainda não anoiteceu

// const horario = 'noite'

// if (horario == 'noite') {
//    console.log('Já anoiteceu')
// } else {
//    console.log('Ainda não anoiteceu')
// }

// //2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o sabor for bolonhesa

// const comida = 'lasanha'
// const sabor = 'bolonhesa'

// if (comida == 'lasanha' && sabor == 'bolonhesa') {
//    console.log('Bom apetite')
// } else {
//    console.log('Escolha outra comida')
// }

// //3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol

// const ferias = true
// const sol = true 

// if (ferias || sol) {
//    console.log('Vamos à praia')
// } else {
//    console.log('Vamos à praia em outro momento')
// }

/////////////////// LOOP

//1 - Criar um loop que conte de 1 até 20 usando o FOR que conte os números ímpares

// for (let i = 1; i < 20; i+=2) {
//    console.log(i)
// }

// console.log('-----------')
// //2 - Criar um loop que conte de 20 até 1 usando o WHILE que conte os números pares
// let contador = 20

// while (contador >= 1) {
//    console.log(contador)
//    contador -= 2
// }

/////////////////// FUNCTION

// 1 - Crie uma função que receba comida como (parâmetro) e exiba no console

// function exibeComida(comida) {
//    console.log(comida)
// }
// exibeComida('Lasanha')


// function exibeComida(comida) {
//    return comida
// }

// // console.log(exibeComida('Churrasco'))

// const comida = exibeComida('Macarrão')
// console.log(comida)

// 2 - crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e
// exiba no console


// function exibePersonagem(personagem, cidade, fruta) {
//    console.log('Eu sou ' + personagem + ' e moro em ' + cidade + ' e gosto de comer ' + fruta) 
// }

// exibePersonagem('Pernalonga', 'cenoura', 'Rio de Janeiro')

/////////////////// ARRAY

// let jogos = ['zelda', 'gta', 'mario', 'sonic mania', 'god of war', 'the witcher']


// 1. pop(): Remove um item no fim do array
// 2. push(): Adiciona items no fim do array
// 3. shift(): Remove um item no início do array
// 4. unshift(): Adiciona itens no inicio do array
// 5. arr.splice(x, y, z): Remove, adiciona e substitui um item do array


// // 1- Utilize um método para adicionar dois jogos ao fim do array
// jogos.push('The Sims', 'Valorant')

// // 2 - Utilize um método para remover o o último jogo dentro do array.
// jogos.pop(5)

// // 3 - Utilize um método para organizar os jogos em ordem alfabética

// jogos.sort()
// console.log(jogos)

/////////////////// OBJETO

// 1 - Crie um array chamado "pessoas" contendo ao menos 3 objetos.
// 2 - Cada objeto deve receber as seguintes propriedades: nome, idade, altura, musicas.
// 3 - Na propriedade musicas, adicione ao menos 3 itens.
// 4 - Mostre no console uma musica de cada lista.

const pessoas = [
   {
      nome: 'Deo',
      idade: 18,
      altura: 1.60,
      musica: [
         'Evidências1',
         'Garota de Ipanema',
         'Brilha, Brilha estrelinha',
         'Eu não sei'
      ]
   },
   {
      nome: 'Mariele',
      idade: 18,
      altura: 1.60,
      musica: [
         'Evidências2',
         'Garota de Ipanema',
         'Brilha, Brilha estrelinha',
         'Eu não sei'
      ]
   },
   {
      nome: 'Matheus',
      idade: 18,
      altura: 1.60,
      musica: [
         'Evidências3',
         'Garota de Ipanema',
         'Brilha, Brilha estrelinha',
         'Eu não sei'
      ]
   },
   {
      nome: 'Racchel',
      idade: 18,
      altura: 1.60,
      musica: [
         'Evidências4',
         'Garota de Ipanema',
         'Brilha, Brilha estrelinha',
         'Eu não sei'
      ]
   }
];

for (let i = 0; i < pessoas.length; i++) {
   console.log(pessoas[i].musica[0])
}

console.log(pessoas[0].musica[0])
console.log(pessoas[1].musica[0])
console.log(pessoas[2].musica[0])
console.log(pessoas[3].musica[0])