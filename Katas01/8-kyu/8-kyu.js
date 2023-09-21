function getHelloWorld() {
  return "Hello World"
}

function getStringByCondition(respuesta) {
  return respuesta ? "La condición es verdadera" : "La condición es falsa";
}

function addKataToInput(argumento) {
  return argumento + " kata";
}

function basicCalculator(numero1, numero2, operador) {
  switch (operador) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
  }

}

function negativeNumber(num) {
  if (typeof num !== 'number') {
    return null;
  }
  else if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

function basicCalculatorWithValidation(numero1, numero2, operador) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    return null;
  }

  switch (operador) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
    default:
      return null;
  }
}

function sumNumbersInArray(array) {
  let suma = 0;
  if (Array.isArray(array)) {
    for (let i = 0; i <= array.length; i++) {
      if (typeof array[i] == 'number') {
        suma += array[i];
      }
    }
  }
  return suma;
}

function countNegativeNumbersInArray(array) {
  let suma = 0;
  if (Array.isArray(array)) {
    for (let i = 0; i <= array.length; i++) {
      if (typeof array[i] == 'number' && array[i] < 0) {
        suma += 1;
      }
    }
  }
  return suma;
}

function converToEuro(numero) {
  if (!isNaN(numero) && numero != null) {
    let numero2 = parseFloat(numero);
    return numero.toFixed(2) + "€"
  }
  return "0.00€";
}

function abbreviateWords(palabra1, palabra2) {
  if (palabra1 != null && palabra2 != null && palabra2 != "" && palabra1 != "" && isNaN(palabra1) && isNaN(palabra2)) {
    return palabra1.charAt(0) + "." + palabra2.charAt(0)
  }
  return null;
}

function filterByWord(frase, filtro) {
  phrase = frase;
  if (frase == '' || filtro == '') {
    return '';
  }
  if (frase != null && filtro != null && isNaN(filtro) && isNaN(frase)) {
    return phrase.replace(filtro, '');
  }
  return null;
}

function reverse(palabra) {
  array = [];
  palabra2 = ""

  if (palabra == '') {
    return '';
  }

  if (isNaN(palabra) && palabra != null) {
    for (let i = 0; i < palabra.length; i++) {
      array.push(palabra.charAt(i));
    }
    array.reverse();
    for (let i = 0; i < array.length; i++) {
      palabra2 += array[i];
    }
    return palabra2;
  }
  return null;
}

function isAllUpperCase(palabra) {

  if (typeof palabra != 'string') {
    return false;
  }

  if (palabra.toUpperCase() == palabra) {
    return true;
  }

  return false;

}

function isPalindrome(palabra) {
  if (typeof palabra != 'string') {
    return false;
  }

  let palindromo = palabra.toLowerCase().split('').reverse().join('');
  return palindromo == palabra.toLowerCase();

}

function filterAndReverse(palabra, argumento, booleano) {
  if (typeof palabra != 'string' || typeof argumento != 'string' || typeof booleano != 'boolean') {
    return null;
  }

  let frase = palabra.replace(argumento, '');

  if (booleano) {
    palabra2 = ""
    array = [];

    for (let i = 0; i < frase.length; i++) {
      array.push(frase.charAt(i));
    }
    array.reverse();
    for (let i = 0; i < array.length; i++) {
      palabra2 += array[i];
    }

    return palabra2;
  } else {
    return frase;
  }

}

function repeatWord(frase, numero) {
  if (frase == null || numero == null) {
    return null;
  }


  let frase2 = "";
  for (let i = 0; i < numero; i++) {
    frase2 += frase;
  }
  return frase2;
}

function replaceWordInSentence(frase, patron, palabra) {
  if (typeof frase !== 'string' || typeof patron !== 'string' || typeof palabra !== 'string') {
    return null;
  }

  if (patron === '') {
    return frase;
  }

  return frase.replace(new RegExp(patron, 'g'), palabra);
}

function sumNumbersToFinalNumber(numero) {
  if (isNaN(numero) || numero == null) {
    return 0;
  }

  if (numero < 0 || numero == undefined) {
    return 0;
  }

  suma = 0;

  for (let i = 0; i <= numero; i++) {
    suma += i;
  }

  return suma;
}

function largestExpression() {
}

function largestExpressionAdvance() {
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome,
  repeatWord,
  filterAndReverse,
  replaceWordInSentence,
  sumNumbersToFinalNumber,
  largestExpression,
  largestExpressionAdvance,
};
