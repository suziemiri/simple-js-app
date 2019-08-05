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

repository.forEach(function(property){
  document.write('Name' + ' : ' + property.name + '<br>'),
  document.write('Height' + ' : ' + property.height + '<br>'),
  document.write('Types' + ' : ' + property.types + '<br>'),
  document.write('Weaknesses' + ' : ' + property.weaknesses + '<br>')
  if (property.height >= 0.8) {
  document.write('Wow, that is a big pokemon!' + '<br>' + '<br>');
} else {
  document.write('Aww, how cute!' + '<br>' + '<br>');
 }
});
