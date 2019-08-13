var pokemonRepository = (function () {
var repository = [
{
  name: 'Charmander',
  height: 0.8, //centimeters
  types: ['Fire'],
  weaknesses: ['Ground', 'Rock', 'Water'],
},

{
  name: 'Squirtle',
  height: 0.4, //centimeters
  types: ['Water'],
  weaknesses: ['Electric', 'Grass'],
},

{
  name: 'Pikachu',
  height: 0.4, //centimeters
  types: ['Electric'],
  weaknesses: ['Ground'],
},

{
  name: 'Pidgey',
  height: 0.4, //centimeters
  types: ['Normal', 'Flying'],
  weaknesses: ['Electric', 'Ice','Rock'],
},
];
function add(pokemon) {
  repository.push(pokemon);
}
function getAll() {
  return repository;
}
function addListItem(pokemon) {
  var listItem = document.createElement("li");
  var button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-style");
  listItem.appendChild(button);
  $element.appendChild(listItem);
  button.addEventListener("click", function showDetails(pokemon) {

  });
}

function showDetails(pokemon) {
  console.log(pokemon)
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails
};


})();

pokemonRepository.add(
  { name: 'Vulpix',
  height: 0.5,
  types: ['Fire'],
  weaknesses: ['Ground', 'Electric', 'Water']
});


var $element = document.querySelector(".pokemonList")

  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

});







/*  if (pokemon.height >= 0.8) {
  document.write('Wow, that is a big pokemon!' + '<br>' + '<br>');
} else {
  document.write('Aww, how cute!' + '<br>' + '<br>');
 }
document.write(pokemonRepository.getAll());
});

/*repository.forEach(function(property){
  document.write('Name' + ' : ' + pokemon.name + '<br>'),
  document.write('Height' + ' : ' + pokemon.height + '<br>'),
  document.write('Types' + ' : ' + pokemon.types + '<br>'),
  document.write('Weaknesses' + ' : ' + pokemon.weaknesses + '<br>')
  if (pokemon.height >= 0.8) {
  document.write('Wow, that is a big pokemon!' + '<br>' + '<br>');
} else {
  document.write('Aww, how cute!' + '<br>' + '<br>');
 }
});*/
