const capitalizeWord = (word) => {
  if (typeof word !== 'string') return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.querySelector('li');
  let img = document.createElement('img');

  const pokeName = capitalizeWord(pokemon.name);
  const imgSrc = pokemon.sprites.other.dream_world.front_default;
  img.src = imgSrc
  li.innerHTML = `${pokeName}</br>${img.outerHTML}`;
  ul.appendChild(li);
}

const fetchPokemon = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/squirtle';
  fetch(URL)
    .then((res) => res.json())
    .then((poke) => appendPokemon(poke));
}

window.onload = fetchPokemon();