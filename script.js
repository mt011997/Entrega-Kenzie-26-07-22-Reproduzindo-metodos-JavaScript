/* ------------------------------- Método Map ------------------------------- */


const arrayMap = [1, 2, 3, 4, 5];


//Function CallBakc


function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}


//Function Map


function map(array, callback) {


  for(let i = 0; i < array.length; i++){
      
    console.log(callback(array[i], i, array)) 

  }

}

map(arrayMap, callbackMap);






/* ------------------------------ Método Filter ----------------------------- */


const arrayFilter = [1, 2, 3, 4, 5]; 


//Function CallBack


function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}


//Function Filter


function filter(array, callback) {
  
  numeros = []

  for(let i = 0; i < array.length; i++){

   if(callback(array[i], i, array) == true){

      numeros.push(array[i])
   
   }

  }

  if(numeros.length == 0){

    return -1

  }else{

    return numeros

  }

}

console.log(filter(arrayFilter, callbackFilter));





/* ------------------------------ Método Reduce ----------------------------- */




const arrayReduce = [1, 2, 3, 4, 5];


//Function CallBack


function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}


//Function Reduce


function reduce(array, callback, initialValue = 0) {
  
  let soma = initialValue

  for(let i = 0; i < array.length; i++){

    soma = callback(array[i], soma)

  }

  return soma

}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
