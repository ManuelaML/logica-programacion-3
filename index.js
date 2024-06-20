let flag;
do {
  let number = parseInt(prompt('Ingrese un número'));
  if (typeof number == 'number') {
    alert(`El factorial de ${number} es: ${recursiveFactorial(number)}`);
    flag = false;
  } else {
    flag = true;
    alert('Por favor ingrese un número valido');
  }
} while (flag);
function recursiveFactorial(num) {
  return num == 1 ? num : recursiveFactorial(num - 1) * num;
}
