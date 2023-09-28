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

function removeValues() {
}

function findDuplicates() {
}

function convertNumberToStringWords() {
}

module.exports = { getAVG, replaceVocalWithPosition, convertArrayStringsToArrayNumbers, removeValues, findDuplicates, convertNumberToStringWords };
