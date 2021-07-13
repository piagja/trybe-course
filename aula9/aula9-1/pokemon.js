const capitalizeWord = (word) => {
  if (typeof word !== 'string') return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const appendPokemon = (pokemon) => {
  const ul = document.querySelector('ul')
  const li = document.querySelector('li')
  const img = document.createElement('img')

  const pokeName = capitalizeWord(pokemon.name)
  const imgSrc = pokemon.sprites.other.dream_world.front_default
  img.src = imgSrc
  li.innerHTML += `<br>${pokeName}</br>${img.outerHTML}`
  ul.appendChild(li)
}

const getPokemon = (pokemonName) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  return new Promise((resolve, reject) => {
    if (pokemonName === 'pikachu') return reject('Pokemon chato demais!')
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((pokemon) => {
          appendPokemon(pokemon)
          resolve()
        })
    } catch (error) {
      console.log('Deu erro broto: ', error)
    }
  })
}

const fetchPokemon = async () => {
  try {
    await getPokemon('mew')
    await getPokemon('charizard')
    await getPokemon('gengar')
    await getPokemon('muk')
    await getPokemon('pikachu')
  } catch (error) {
    return new Error('Deu erro broto: ', error)
  }
}

// const fetchPokemon = () => {
//   getPokemon('squirtle')
//     .then(() => getPokemon('gastly'))
//     .then(() => getPokemon('mew'))
//     .then(() => getPokemon('gastly'))
// }

window.onload = fetchPokemon()
