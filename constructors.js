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