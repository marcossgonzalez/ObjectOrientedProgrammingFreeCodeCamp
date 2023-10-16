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
/*Podemos criar também 'subtypes' instanciando, tendo como parente um protótipo, um protótipo 'filho'.*/
//------------------------------------------
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle2 = new Dog();
//------------------------------------------
function Animal2() { }
function Bird2() { }
function Dog2() { }

Bird2.prototype = Object.create(Animal2.prototype);
Dog2.prototype = Object.create(Animal2.prototype);

// Only change code below this line


Bird2.prototype.constructor = Bird2;
let duck2 = new Bird2();
duck2.constructor;
Dog2.prototype.constructor = Dog2;
let beagle3 = new Dog2();
beagle3.constructor;
//------------------------------------------
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
}


// Only change code above this line

let beagle4 = new Dog();
//------------------------------------------
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
console.log(Bird.prototype.fly());
//------------------------------------------