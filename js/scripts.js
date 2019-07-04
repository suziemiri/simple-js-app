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
document.write('<br>' + "Name: " + repository[i].name + '' + '<br>' + 
                 "Height: "+ repository[i].height + '' + '<br>' + 
                 "Types: " + repository[i].types + '' + '<br>' +
                 "Weaknesses: " + repository[i].weaknesses) + '' + '<br>' 
    if (repository[i].height === 0.8) {
    document.write('<br>' + 'Wow, that is a big pokemon!');
  } else if (repository[i].height < 0.8) {
    document.write('<br>' + 'Aww, how cute!');
  } 
 }
