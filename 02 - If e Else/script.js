let nome = "Racchel"
let sobrenome = "Velasco"
let idade = 19
let humano = true
let aniversario = "setembro"

// se a idade for maior que 18
if (idade >=18) {
   console.log("👨 Você já é adulto! 👩")
} else {
   console.log("🧒 Você ainda é criança! 👧")
}

// se você for maior de idade E a condição humana seja true
if (idade >=18 && humano === true) {
   console.log("👨 Você já é ser humano adulto! 👩")
} else {
   console.log("🧒 Você ainda é ser humano criança! 👧")
}

// se você fizer aniversário em Janeiro OU Dezembro
if (aniversario === "dezembro" || aniversario === "janeiro" ) {
   console.log("🎉 Meus parabéns! Você faz aniversário em Janeiro OU Dezembro 🎉")
} else {
   console.log("🤡 É, ainda não é sua vez. 🤡")
}

// se seu nome começar com a letra R
if (nome.substring(0,1) === "R" || nome.substring(0,1) === "r") {
   console.log("🥰 Oia, seu nome começa com 'R'! 🥰")
} else {
   console.log("😔 Oia, seu nome é bonito, mas não começa com 'R'. 😔")
}

// se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
if (
   nome.substring(0,1) === "E" || 
   nome.substring(0,1) === "e" ||
   sobrenome.length > 6
) {

   console.log("🥰 Oia, seu nome começa com 'E' OU seu sobrenome tem mais de 6 letras! 🥰")
} else {
   console.log("😔 Oia, seu nome é bonito, mas não começa com E OU seu sobrenome não tem mais de 6 letras! 😔")
}