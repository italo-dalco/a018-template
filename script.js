// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]


//Prática guiada 01--------------------------------------------------------------------------------------


// Declare duas funções:
// A primeira deve receber um array de números, e retornar todos os números do array multiplicados por 3;
// A segunda deve receber um array de números, e retornar um array apenas com os números pares.


// const array = [55,60,41,13,1,8,30,25,99]

//  function multiplicaPor3(array){

//    const novoArray = []

//      for(let i = 0; i < array.length; i++) {
//        novoArray.push(array[i] * 3)
//      }
//          return novoArray
// }

// console.log(multiplicaPor3(array))



//Arrow Function

// const array = [55,60,41,13,1,8,30,25,99]

  // const multiplicaPor3 = (array) => {
  
  //   const novoArray = []

  //     for(let itensDoArray of array) {

  //       novoArray.push(itensDoArray * 3)
  //     }
  //        return novoArray
         
  // }

// console.log(multiplicaPor3(array))


//FOR OF

//A segunda deve receber um array de números e retornar um array apenas com os números pares.


  // const array2 = [55,60,41,13,1,8,30,25,99]


    //   function retornaPares(array) {

    //     const pares = []

    //       for(let itensDoArray2 of array) {
      
    //         if(itensDoArray2 % 2 === 0) {

    //           pares.push(itensDoArray2)
    //       }
    //     }
    //             return pares
    // }

   // console.log(retornaPares(array2))


//FOR OF

//Função que multiplica e retorna valores pares

// const array = [55,60,41,13,1,8,30,25,99]

//  const multiplicaERetornaPares = (array, funcao) => {

//    const novoArray = []

//      for(let itensDoArray3 of array) {

//        novoArray.push(itensDoArray3 * 3)
//      }
//         let pares = funcao(novoArray)

//            return pares
//  }

//  console.log(multiplicaERetornaPares(array , retornaPares))

//-----------------------------------------------------------------------------------------------------------

//Em seguida, crie uma função que deve receber como parâmetros um array e uma função.

// O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do
// novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.

// Faça duas chamadas da função abaixo, passando em cada chamada um array e uma das funções
// criadas anteriormente como callback.



//FOR OFF C/ CALL BACK PUXANDO DA FUNÇÃO ACIMA ⬆️

//  const array2 = [55,60,41,13,1,8,60,25,99]

//   const dividePor2 = (array, funcao) => {
  
//     const novoArray = []

//      for(let itensDoArray4 of array) {

//        novoArray.push(itensDoArray4 / 2)
//       }
//         let pares = funcao(novoArray)

//           return pares
//   }

//   console.log(dividePor2(array2 , retornaPares))

//   console.log(dividePor2(array2 , multiplicaPor3))

//------------------------------------------------------------------------------------------------------------


//ARROW FUNCTION C/ MAP

// const array3 = [55,60,41,13,1,8,60,25,99]

//  const multiplicaComMap = array3.map((item, index, array) => {

//    return item * 3
//  })

//  console.log(multiplicaComMap)


//----------------------------------------------------------------------------------------------------------

//ARROW FUNCTION C/ FILTER

//  const retornaParesFilter = array3.filter ((item) => {

//    return item % 2 === 0

//  })

//  console.log(retornaParesFilter)

//-----------------------------------------------------------------------------------------------------------

// Com o array de pokémons abaixo, faça o seguinte:

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

//A) Crie uma função que receba como parâmetro o objeto pokémon e que defina a propriedade vida dele como 100;

function listaPokemons(pokemons) {

let pokemonFullLife = []

  for(let pokemon of pokemons) {

    pokemonFullLife.push({
      nome: pokemon.nome, tipo: pokemon.tipo, vida: 100
    })
}
        return pokemonFullLife
}

console.log(listaPokemons(pokemons))


//B) Crie uma constante pokemonsVidaCheia, e utilize a função de array map(),
// passando a função da letra A como argumento callback;

const pokemonsVidaCheia = pokemons.map((item, index, array) => {

return item.vida = 100
})

console.log(pokemonsVidaCheia)


//C) Crie uma constante pokemonsDeFogo, e utilize a função de array filter(),
// passando uma função não-nomeada como argumento de callback

const pokemonsDeFogo = pokemons.filter ((item) => {

return item.tipo === "fogo"
})

console.log(pokemonsDeFogo)

