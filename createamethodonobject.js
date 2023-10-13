//--------------------------------------
/*Métodos são propriedades que são funções. 
Isso adiciona um comportamento diferente a um objeto. 
Aqui está o exemplo do pato com um método:
let duck = {
  name: "Aflac",
  numLegs: 2,
  propriedade com método como valor->> sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();*/
//--------------------------------------
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
      return "This dog has " + dog.numLegs + " legs."
    }
  };
  
  dog.sayLegs();
//--------------------------------------
/*Se o nome da variável mudar, qualquer código que faça referência ao nome original também precisará ser atualizado. 
Em uma definição curta de objeto, isso não é um problema, mas se um objeto tiver muitas referências às suas 
propriedades, há uma chance maior de erro.

Uma maneira de evitar esses problemas é com a palavra-chave 'this':

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + (palavra-chave 'this')->>this.name + ".";}
};*/
//--------------------------------------
let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog2.sayLegs();
//--------------------------------------
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = ["Dorongo", 3];
for (let prop in canary){
  if (canary.hasOwnProperty(prop)){
    ownProps.push(prop);
  }
}
console.log(canary.numLegs);
// Only change code below this line
//--------------------------------------
/* As propriedades no protótipo são compartilhadas entre 
TODAS as instâncias do Bird. Veja como adicionar numLegs ao protótipo Bird:
Bird.prototype.numLegs = 2;
Agora todas as instâncias de 'Bird' terão a propriedade 'numLegs' por conta da prototipagem.*/
//--------------------------------------
function Dog(name) {
  this.name = name;
}


Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");
//--------------------------------------
