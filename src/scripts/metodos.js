// ARRAY PARA TESTE 
const numbers = [1, 4, 9]

/* --------------------- MAP --------------------- */

function newMap(array, callback) {
  
  let newArray = []

  for (let i = 0; i < array.length; i++){
    const valorAtual = array[i]
    newArray.push(callback(valorAtual, i, array))
  }
  return newArray
}

function callbackMap(valorAtual, i, array){
  const operation = (Math.sqrt(valorAtual))
  return operation
}

console.log("--- MAP ---")
console.log(newMap(numbers, callbackMap))

/* --------------------- FILTER --------------------- */

function newFilter(array, callback){
  let newArrayFilter = []

  for (let i = 0; i < array.length; i++){
    let element = array[i]
    let callResult = callback(element, i, array)
    
    if (callResult == true){
      newArrayFilter.push(element)
    }
  }
  return newArrayFilter
}

function callbackFilter(element, i, array){
  if (element > 5){
  return true
  }
}

console.log("--- FILTER ---")
console.log(newFilter(numbers, callbackFilter))

/* --------------------- FIND --------------------- */

function newFind(array, callback){

  for (let i = 0; i < array.length; i++){
    let element = array[i]
    let callResult = callback(element, i, array)
    
    if (callResult == true){
    return element
    }
  }
}

function callbackFind(element, i, array){
  if (element % 2 == 0){
    return true 
  }
}

console.log("--- FIND ---")
console.log(newFind(numbers, callbackFind))

/* --------------------- REDUCE --------------------- */

function newReduce(array, callback, initialValue) {
  let accumulator 
  let i 

  if (initialValue){
    accumulator = initialValue
    i = 0
  }else{
    accumulator = array[0]
    i = 1
  }


  for (; i < array.length; i++) {
    let currentValue = array[i]
    accumulator = callback(accumulator, currentValue, array)
  }

  return accumulator
}

function callbackReduce(accumulator, currentValue, array) {

  accumulator = accumulator + currentValue

  return accumulator
}

console.log("--- REDUCE ---")
console.log(newReduce(numbers, callbackReduce, 1))

// ARRAY PARA TESTE 
let array = [2, 5, 9];
(2);     // 0
(7);     // -1
(9, 2);  // 2
(2, -1); // -1
(2, -3); // 0

/* --------------------- INCLUDES --------------------- */

function newIncludes(array, searchElement, fromIndex){
  
  if (fromIndex < 0 && Math.abs(fromIndex) > array.length || fromIndex > array.length || Math.abs(fromIndex) == array.length){
    for (let i = 0; i < array.length; i++){
      if (searchElement === array[i]){
        return true
      }
    }
  }else if(fromIndex < array.length){
    for (let i = Math.abs(fromIndex); i < array.length; i++){
      if (searchElement === array[i]){
        return true
      }
    }
  }
return false
}
console.log("--- INCLUDES ---")
console.log(newIncludes(array, 9, 2))


/* --------------------- INDEX OF --------------------- */

function newIndexOf(array, elementoDePesquisa, pontoInicial){
 
  if (pontoInicial < 0 && Math.abs(pontoInicial) > array.length || pontoInicial > array.length || Math.abs(pontoInicial) == array.length){
    for (let i = 0; i < array.length; i++){
      if (elementoDePesquisa === array[i]){
        return i
      }
    }

  }else if(pontoInicial < array.length){
    for (let i = Math.abs(pontoInicial); i < array.length; i++){
      if (elementoDePesquisa === array[i]){
        return i
      }
    }
  }

  return -1
}
console.log("--- INDEX OF ---")
console.log(newIndexOf(array, 2, -3))