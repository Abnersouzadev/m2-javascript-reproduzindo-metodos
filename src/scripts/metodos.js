const numbers = [1, 2, 3, 4, 5];


//;Map
function callBackMap(element) {
    return element * 2;
}

function map(array, callback) {

    let retorno = []

    for (let i = 0; i < array.length; i++) {
        let retornoCallBack = callback(array[i])
        retorno.push(retornoCallBack)
    }
    return retorno
}

console.log(map(numbers, callBackMap))

//;filter
function callbackFilter(element) {
    if (element >= 4) {
        return true
    }
}

function filter(array, callback) {

    let retorno = []

    for (let i = 0; i < array.length; i++) {

        if (callback(array[i]) === true) {
            retorno.push(array[i])
        }
    }
    return retorno
}

console.log(filter(numbers, callbackFilter))

//;Reduce

function callBackReduce(acumulador, valorAtual) {
    return acumulador + valorAtual
}

function reduce(array, callback, valorInicial = 0) {

    let acumulador = valorInicial

    for (let i = 0; i < array.length; i++) {

        acumulador = callback(acumulador, array[i])

    }
    return acumulador


}

console.log(reduce(numbers, callBackReduce))

//;Find

function callbackFind(element) {
    if (element >= 2) {
        return true
    }
}

function find(array, callback) {

    let retorno = 0

    for (let i = 0; i < array.length; i++) {

        if (callback(array[i]) === true) {
            return array[i]
        }
    }
    return retorno
}

console.log(find(numbers, callbackFind))

//;includes

function includes(array, numero, fromIndex) {

    
    if (fromIndex >=0) {
    
     for (let i = fromIndex; i < array.length; i++) {
            if (array[i] === numero) {
                return true
            }
            

        }
        return false
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === numero) {
                return true
            }
        }
    }

    return false

}
console.log(includes(numbers, 3,-1))

//; indexOF

function indexOF(array, numero, fromIndex) {

   if(fromIndex){
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] == numero) {
            return i
        }
        
    }
    return -1

   }
   else{
    for (let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            return i
        }
        
    }
    return -1
   }
   
}

console.log(indexOF(numbers, 1, 0))