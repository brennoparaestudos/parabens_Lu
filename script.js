let porta = document.getElementById('porta')
let gato = document.getElementById('gato')
let jardim = document.getElementById('jardim')
let chave = document.getElementById('chave')
let lua = document.getElementById('lua')
let overlay = document.getElementById('overlay')
let titulo_mensagem = document.getElementById('titulo-mensagem')
let texto_mensagem = document.getElementById('texto-mensagem')
let botaoFechar = document.getElementById('btn-fechar')

const mensagens = {
    porta:{
        titulo: 'A porta',
        mensagem: 'Assim como a Coraline encontrou uma porta para outro mundo, você abriu uma porta na minha vida que eu nunca mais quis fechar. Tudo começou quando a gente se encontrou na rua do meio em 2021, simplesmente do nada, naquele dia eu nem sonhava em namorar com você, para mim era algo totalmente improvável, porém o destino é realmente muito foda.'
    },

    gato:{
        titulo: 'O gato',
        mensagem: 'O gato do filme aparecia sempre na hora certa. Você é assim — aparece exatamente quando eu preciso. Você está muito presente em momentos em que não é nem sua obrigação, como por exemplo, cuidar de mim todas as vezes em que eu estou doente ou fechar comigo 10/10 em alguma conta.'
    },

    jardim:{
        titulo: 'O jardim',
        mensagem: 'No filme, o jardim florescia de um jeito mágico. Você faz o mesmo comigo, principalmente quando você sorri e me olha de um jeito que só você tem, amo todos seus detalhes, seu cheiro, eu amo o seu jeito que é unico e isso te torna especial.'
    },

    chave:{
        titulo:'A chave',
        mensagem: ' Coraline carregava a chave como algo precioso. Você é o que eu carrego com mais cuidado. Do seu lado eu me sinto muito seguro, e com isso vem a minha vontade instantânea de vencer, para proporcionar um futuro lindo para nossa família.'
    },

    lua:{
        titulo: 'A lua',
        mensagem: 'A Coraline descobriu que o mundo real, com as pessoas certas, vale muito mais do que qualquer outro mundo perfeito. Você é minha pessoa certa. Desde 21/04/2022, nesse dia eu tomei a melhor decisão da minha vida, eu quero estar com você eternamente.'
    }
}

porta.addEventListener('click', function(){
    titulo_mensagem.innerHTML = mensagens.porta.titulo
    texto_mensagem.innerHTML = mensagens.porta.mensagem
    overlay.style.display = 'block'
})

gato.addEventListener('click', function(){
    titulo_mensagem.innerHTML = mensagens.gato.titulo
    texto_mensagem.innerHTML = mensagens.gato.mensagem
    overlay.style.display = 'block'
})

jardim.addEventListener('click', function(){
    titulo_mensagem.innerHTML = mensagens.jardim.titulo
    texto_mensagem.innerHTML = mensagens.jardim.mensagem
    overlay.style.display = 'block'
})

chave.addEventListener('click', function(){
    titulo_mensagem.innerHTML = mensagens.chave.titulo
    texto_mensagem.innerHTML = mensagens.chave.mensagem
    overlay.style.display = 'block'
})

lua.addEventListener('click', function(){
    titulo_mensagem.innerHTML = mensagens.lua.titulo
    texto_mensagem.innerHTML = mensagens.lua.mensagem
    overlay.style.display = 'block'
})

botaoFechar.addEventListener('click', function(){
    overlay.style.display = 'none'
})