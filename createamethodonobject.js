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