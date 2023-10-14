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