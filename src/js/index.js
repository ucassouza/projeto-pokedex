/*
    QUANDO CLICAR NO POKÈMON DA LISTAGEM TEMOS QUE ESCONDER O CARTÃO DO POKÉMON ABERTO E MOSTRAR O CARTÃO CORRESPONDENTE AO QUE FOI SELECIONADO NA LISTAGEM

    PARA ISSO VAMOS PRECISAR TRABALHAR COM DOIS ELEMENTOS
    1. LISTAGEMKK
    2. CARTÃO POKÉMON

    PRECISAMOS CRIAR DUAS VARIAVEIS NO JS PARA TRABALHAR COM OS ELEMENTOS NA TELA

    VAMOS TRABALHAR COM UM EVENTO DE CLIQUE FEITO PELO USUARIO NA LISTAGEM DE POKEMON

    - REMOVER A CLASSE ABERTO SÓ DO CARTÃO QUE ESTA ABERTO
    - AO CLICAR EM UM POKEMON DA LISTAGEM PEGAMOS O ID DESSE POKEMON PARA SABER QUAL CARTÃO MOSTRAR
    - REMOVER A CLASSE ATIVO QUE MARCA O POKEMON SELECIONADO
    - ADICIONAR A CLASSE ATIVO NO ITEM DA LISTA SELECIONADO
*/

const ListaSelecaoPokemons = document.querySelectorAll('.pokemon')
const PokemonsCards = document.querySelectorAll('.cartao-pokemon')

ListaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto') 

        const idPokemonSelecionado = pokemon.attributes.id.value


        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)  
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    }) 
})
