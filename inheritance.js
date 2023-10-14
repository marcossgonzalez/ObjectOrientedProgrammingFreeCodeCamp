//------------------------------------------
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
//------------------------------------------
/* Para criar uma instância de um 'supertype' ou protótipo parente, que dará, como herança,
os métodos contidos nele aos outros objetos instanciados, fazemos o seguinte:
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
Depois de criar o protótipo, instanciamos o objeto 'animal':
let animal = Object.create(Animal.prototype);
'Object.create(objeto)' cria um novo objeto e 'objeto' é definido como o novo protótipo do objeto.
Ao definir o protótipo em (Animal.prototype) para 'animal', estamos instanciando o objeto Animal e atribuindo-o
à variável animal, que consta antes do símbolo antes de igual.*/
//------------------------------------------
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
//------------------------------------------