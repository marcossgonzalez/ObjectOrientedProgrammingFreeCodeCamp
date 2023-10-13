//--------------------------------------
/* Construtores são funções que criam novos objetos. Eles definem propriedades e comportamentos que 
pertencerão ao novo objeto. Pense neles como um modelo para a criação de novos objetos.

Por exemplo:
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
Esse construtor define 'Bird' como objeto e as palavras-chave 'this' como chaves para os valores em sequência;*/
//--------------------------------------
function Dog() {
  this.name = "Doggo";
  this.color = "Brown";
  this.numLegs = 4;
}
//--------------------------------------
/* Para instanciar (ou fazer o Objeto ser alocado na memória) usamos a palavra-chave 'new'. Assim usamos o método construtor
e o convertemos em um Objeto usável, com propriedades e valores.
Por exemplo:
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let bluebird = (palavra-chave)->> new Bird();*/
//--------------------------------------
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();
// Only change code below this line
//--------------------------------------
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Terrier", "Marrom");
//--------------------------------------
/*Sempre que uma função construtora cria um novo objeto, esse objeto é considerado uma instância de seu construtor. 
JavaScript oferece uma maneira conveniente de verificar isso com o operador instanceof. 
instanceof permite comparar um objeto a um construtor, retornando verdadeiro ou falso com base no fato de esse objeto 
ter sido criado ou não com o construtor. Aqui está um exemplo: 

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
*/
//--------------------------------------
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(4);
  myHouse instanceof House;
  // Only change code below this line
//--------------------------------------