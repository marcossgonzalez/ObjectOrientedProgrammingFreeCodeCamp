//--------------------------------------
/*Objetos em JavaScript são usados para modelar objetos do mundo real, dando-lhes propriedades e 
comportamento exatamente como seus equivalentes do mundo real. 
Aqui está um exemplo usando esses conceitos para criar um objeto pato:
let duck = {
  name: "Aflac",
  numLegs: 2
};

*/
//--------------------------------------
let dog = {
    name: "Doggo",
    numLegs: 4
  };
//--------------------------------------
/* A anotação com ponto é usada para acessar o valor do objeto no nome do objeto, em conjunto com o objeto.
Por exemplo:
console.log(duck.name);*/
//--------------------------------------
let dog2 = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog2.name);
  console.log(dog2.numLegs);
// Only change code below this line
//--------------------------------------
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("I'm gliding!");
  }
}

glideMixin(boat);
glideMixin(bird);

console.log(bird.glide());
//--------------------------------------