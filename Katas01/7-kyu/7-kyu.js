function getAVG(arr) {
    if (!Array.isArray(arr) || arr === null) {
        return 0;
    }
    let newArray = arr.filter((valor) => typeof valor === 'number');

    if (newArray.length === 0) {
        return 0;
    }
    let suma = newArray.reduce((acumulador, valor) => acumulador + valor, 0);

    return Math.ceil(suma / newArray.length);
}


function replaceVocalWithPosition(phrase) {
    if (typeof phrase != 'string' || phrase === null) {
        return null;
    }

    let vocals = ["a", "e", "i", "o", "u"];
    let phrase2 = phrase.toLowerCase();
    let nuevaFrase = '';

    for (let i = 0; i < phrase.length; i++) {
        if (vocals.includes(phrase2[i])) {
            nuevaFrase += i + 1;
        } else {
            nuevaFrase += phrase[i];
        }
    }

    return nuevaFrase;

}

function convertArrayStringsToArrayNumbers(array) {
    if (!Array.isArray(array)) {
        return [0];
    }

    let numbers = array.map((element) => {
        let number = parseFloat(element);
        return isNaN(number) ? 0 : number;
    });

    return numbers;
}

function removeValues(sourceArray, valuesToRemoveArray) {
    if (!Array.isArray(sourceArray)) {
        return [];
    }

    if (!Array.isArray(valuesToRemoveArray)) {
        return sourceArray;
    }

    let result = sourceArray.filter((element) => !valuesToRemoveArray.includes(element));

    return result;
}


function findDuplicates(array) {
    if (!Array.isArray(array)) {
        return [];
    }

    var unique = [];
    var duplicates = [];

    array.forEach((element) => {
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        } else if (duplicates.indexOf(element) === -1) {
            duplicates.push(element);
        }
    });

    return duplicates;
}





function convertNumberToStringWords(number) {
    if (typeof number !== 'number') {
        return '';
    }

    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const isNegative = number < 0;

    if (isNegative) {
        number = Math.abs(number);
    }

    const numberString = String(number);
    const resultArray = [];

    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]);
        resultArray.push(words[digit]);
    }

    if (isNegative) {
        resultArray.unshift('neg');
    }

    return resultArray.join('.');
}

module.exports = { getAVG, replaceVocalWithPosition, convertArrayStringsToArrayNumbers, removeValues, findDuplicates, convertNumberToStringWords };
