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

for (var i = 0; i < repository.length; i++) {
  if (repository[i].height == 0.8) {
    document.write(repository[i].name + ' (height: ' + repository[i].height') ');
  } else if (repository[i].types[0] === 'Water') {
    document.write(repository[i].name + ' (height: ' + repository[i].height') Wow thats big! ') ');
  } else if (repository[i].types[0] === 'Fire') { 
     document.write(repository[i].name + ' (height: ' + repository[i].height') ');
   } else if (repository[i].types[1] === 'Electric') {  
    document.write(repository[i].name + ' (height: ' + repository[i].height') ');
   } else {
     document.write(repository[i].name + '(height: ' + repository[i].height') ');
   }
}
