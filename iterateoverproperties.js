//--------------------------------------
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let props in beagle){
    if (beagle.hasOwnProperty(props)){
      ownProps.push(props);
    }else{
      prototypeProps.push(props);
    }
  }
  console.log(ownProps);
  console.log(prototypeProps);
  
  // Only change code below this line
//--------------------------------------
function Dog2(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog2){
      return true;
    }
    return false;
  }
//--------------------------------------
/*Uma maneira mais eficiente é definir o protótipo para um novo objeto que já contenha as propriedades. 
Dessa forma, as propriedades são adicionadas todas de uma vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};*/
//--------------------------------------
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function(){
      console.log("slurp");
    },
    describe: function(){
      console.log("My name is " + this.name);
    }
  };
  let terrier = new Dog("Snoopy");
  terrier.describe();
//--------------------------------------