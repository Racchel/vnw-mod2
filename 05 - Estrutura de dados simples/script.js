let numerosArr = [7,5,6,3,8,9,2,1,4];

let musicasArr = [
   'Eu sei que vou te amar - Tom Jobim',
   'Seu sorriso - Sabrina Lopes',
   'Sabe, amor - Mobi Colombo',
   'De janeiro a janeiro - Roberta Campos',
   'Meu lugar - Onze:20'
]
console.log("Array de músicas:");
console.log(musicasArr)
console.log("Array de números:" );
console.log(numerosArr)

function adicionaInicio(musicasArr, musica) {
   musicasArr.unshift(musica)
   return console.log(musicasArr) 
}

function adicionaFim(musicasArr, musica1, musica2) {
   musicasArr.push(musica1, musica2)
   return console.log(musicasArr) 
}

function removeInicio(musicasArr) {
   musicasArr.shift()
   return console.log(musicasArr)  
}

function removeFim(musicasArr) {
   musicasArr.pop()
   return console.log(musicasArr) 
}

function ordemCrescente(numerosArr) {
   numerosArr.sort()
   return console.log(numerosArr) 
}


adicionaInicio(musicasArr, 'Partilhar - Rubel')
adicionaFim(musicasArr, 'Já pensou - Fábio Brazza', 'Explodir - ANAVITÓRIA')
removeInicio(musicasArr)
removeFim(musicasArr)
ordemCrescente(numerosArr)
