function mensagem() {
   console.log("Oie gente 💜")
}

function mensagemNome(nome) {
   console.log("Oie gente! Eu me chamo " + nome + " 💜")
}

function apresentacao(nome, idade, estiloMusical) {
   console.log(`Oie gente! Eu me chamo ${nome}, tenho ${idade} e gosto de ouvir ${estiloMusical}`)
}

function preferencias(filme, musica) {
   console.log(`Oie gente! Meu filme favorito é ${filme} e minha musica favorita é ${musica}`)
}

function triplo(numero) {
   return numero * 3
}

mensagem()
mensagemNome("Racchel")
apresentacao("Racchel", 19, "mpb, bossa nova, rockzinhos e etc")
preferencias("Perfume - a história de um assassino", "atualmente La Forza Della Vita")
triplo(9)