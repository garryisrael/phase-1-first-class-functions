function area(num){
  return num*num;
}

function receivesAFunction(area){
  const side =3;
  area(side);
  return "Mission accomplished";
}

function returnsANamedFunction(){
  addNumber = num => num +3;
  return addNumber;
}

function returnsAnAnonymousFunction(){
  return (function(){
    console.log("I\'m happy");
  });
}