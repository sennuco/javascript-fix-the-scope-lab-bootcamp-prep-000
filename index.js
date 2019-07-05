function myAnimal(){
  
  var animal = 'dog'
  
  return animal;
}

myAnimal();

function yourAnimal(){
  var animal = 'cat';
  return animal;
}

yourAnimal();

function add2 (n){
  
  return n+2;
}
add2();

var funkyFunction = function(){
  
  return function(){
    return "FUNKY!"
  }
}

funkyFunction();

var theFunk = funkyFunction()();



