var pokemonRepository = (function () {
var repository = [];
var  apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    //adding the details to the items...
    item.imageUrl = details.sprites.front_shiny;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
}

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
  button.addEventListener("click", function () {
    showDetails(pokemon);
  });
    console.log(pokemon)
};

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item); //showModal(item)
  });
}

function showModal() {
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.add('is-visible');
}

function showModal(title, text) {
  var $modalContainer = document.querySelector('#modal-container');

  //clear all modal content that existed
  $modalContainer.innerHTML = '';

  var modal = document.createElement('div');
  modal.ClassList.add('modal');

  //Add new modal content
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';

  var titleElement = document.createElement('h1');
  titleElement.innerText = title;

  var contentElement = document.createElement('p');
  contentElement.innerText = text;

  //closing

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  $modalContainer.appendChild(modal);

  $modalContainer.classList.add('is-visible');

  }
  
  //hides modal
    function hideModal() {
      var $modalContainer = document.querySelector('#modal-container');
      $modalContainer.classList.remove('is-visible');
}

document.querySelector('#show-modal').addEventListener('click',() => {
  showModal('Modal title', 'This is the modal content!');
});



return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList:loadList,
  loadDetails:loadDetails
};


})();

pokemonRepository.add(
  { name: 'Vulpix',
  height: 0.5,
  types: ['Fire'],
  weaknesses: ['Ground', 'Electric', 'Water']
});


var $element = document.querySelector(".pokemonList")

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
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
