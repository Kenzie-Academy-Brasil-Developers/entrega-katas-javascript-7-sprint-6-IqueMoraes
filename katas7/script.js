

function newForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        callback(actualValue, i, array)
    }
}



function newFill(array, value, indexStart = 0, indexEnd) {
    if (indexEnd === undefined) {
        indexEnd = array.length
    }
    console.log(array)
    console.log(indexStart)
    console.log(indexEnd)
    for (let i = indexStart; i < indexEnd; i++) {
        console.log(array[i], 'ainda não')
        array[i] = value;
        console.log(array[i], 'transformei')
    }
}




function newMap(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        newArray[i] = callback(actualValue, i, array)
    }

    return newArray;
}




function newSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        if (callback(actualValue, i, array)) {
            return true
        }
    }
    return false;
}


function newFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        if (callback(actualValue, i, array)) {
            return actualValue
        }
    }
    return undefined
}




function newFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        if (callback(actualValue, i, array)) {
            return i;
        }
    }
    return undefined
}



function newEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        if (!callback(actualValue, i, array)) {
            return false
        }
    }
    return true
}





function newFilter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        if (callback(actualValue, i, array)) {
            newArray[newArray.length] = actualValue;
        }
    }

    return newArray;
}





function newConcat(...value) {
    let newArray = [];

    for (let i = 0; i < value.length; i++) {
        const actualValue = value[i];
        if (Object.prototype.toString.call(actualValue) === '[object Array]') {
            for (let j = 0; j < actualValue.length; j++) {
                const subActualValue = actualValue[j];
                newArray[newArray.length] = subActualValue;
            }
        }

        else {
            newArray[newArray.length] = actualValue;
        }
    }
    return newArray;
}




function newIncludes(array, element, index = 0) {

    for (let i = index; i < array.length; i++) {
        const actualValue = array[i];
        if (actualValue === element) {
            return true
        }
    }
    return false;
}



function newIndexOf(array, element, index = 0) {
    if (index === array.length || index > array.length) {
        return -1;
    }
    else if (index < 0) {
        for (let i = (array.length + index); i < array.length; i++) {
            const actualValue = array[i];
            if (actualValue === element) {
                return i
            }
        }
        return -1
    }
    else {
        for (let i = index; i < array.length; i++) {
            const actualValue = array[i];
            if (actualValue === element) {
                return i
            }
        }
        return -1;
    }


}



function newJoin(array, separator = ',') {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        const actualValue = array[i];
        string += actualValue + separator
    }

    return string;
}


function newReduce(array, callback , acumulator) {
    if(Object.prototype.toString.call(array) !== '[object Array]' || array.length<1){
        return TypeError('O parâmetro não é um array válido')
    }
    let reduced;
    let inicial = 1;
    let acc;
    if(acumulator === undefined){
        acc = array[0]
    }else{
        acc =acumulator;
        inicial =0;
    }
    for (let i = inicial; i < array.length; i++) {
        const actualValue = array[i];
        reduced = callback(acc, actualValue, i, array);
        acc = reduced;
    }

    return reduced;
}



function newSlice(array, initial, final) {
    if(Object.prototype.toString.call(array) !== '[object Array]' || array.length<1){
        throw new TypeError('O parâmetro não é um array válido')
    }
    if(typeof initial !== "number" || Math.floor(initial) !== initial){
        throw new TypeError('O índice inicial não é valido')
    }


    let newArray =[];
    let end;
    let initialIndex;
    if(final !== undefined){
        end = final;
    }
    else if(final<0){
        end = array.length+final;
    }
    else{
        end= array.length;
    }
    if(initial<0){
        initialIndex = array.length+initial;
    }
    else{
        initialIndex = initial;
    }


    for (let i = initialIndex; i < end; i++) {
        const actualValue = array[i];
        newArray[newArray.length] = actualValue;
    }
  console.log(newArray)
    return newArray;
}



let counter = 0;
function newFlat(array, depth){
   
    let newArray = [];
    let loopings = 1;
    if(depth !== undefined && Number.isInteger(depth)){
        let loopings = depth;
    }
     
    for (let i=0; i< array.length; i++){
      let actualValue = array[i];
      if(Object.prototype.toString.call(actualValue) === '[object Array]' && counter < loopings){
        newArray = newConcat(newArray, actualValue);
        counter+= 1;
      }
      else{
        newArray = newConcat(actualValue)
      }
    }

    return newArray

}