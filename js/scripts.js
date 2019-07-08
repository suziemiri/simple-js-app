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

Object.keys(repository).forEach(function(property) {
  document.write(property.name + ' : ' + repository[property.name] + '<br>'),
  document.write(property.height + ' : ' + repository[property.height] + '<br>'),
  document.write(property.types + ' : ' + repository[property.types] + '<br>')
});
/*function printArrayDetails(pokemonList) {
  for (var i = 0; i < pokemonList.length; i++) {
    document.write('<br>' + "Name: " + pokemonList[i].name + '' + '<br>' +
                 "Height: "+ pokemonList[i].height + '' + '<br>' +
                 "Types: " + pokemonList[i].types + '' + '<br>' +
                 "Weaknesses: " + pokemonList[i].weaknesses) + '' + '<br>'
    if (pokemonList[i].height >= 0.8) {
    document.write('<br>' + 'Wow, that is a big pokemon!');
  } else if (pokemonList[i].height < 0.8) {
    document.write('<br>' + 'Aww, how cute!');
   }
  }
}
printArrayDetails(repository);
printArrayDetails(repository);*/
