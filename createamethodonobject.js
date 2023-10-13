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