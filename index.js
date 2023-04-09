function receivesAFunction(area){
  const side =3;
  area(side);
}

function returnsANamedFunction(){
  addNumber = (num) => num +3;
  return addNumber;
}

function returnsAnAnonymousFunction(){
  return (function (){console("I am happy")});
}