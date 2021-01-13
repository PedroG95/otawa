

function calcular() {
  let element = document.getElementById('valor').value
  let resultado = document.getElementById('resultado')

  if (element == 0) {
    resultado.innerText = 'El numero ingresado no es par ni impar'
  } else {
    if ( element % 2 == 0) {
      resultado.innerText = 'El numero ingresado es par'
    } else {
      resultado.innerText = 'El numero ingresado es impar'
    }
  }
}
