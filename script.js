function codificar() {
  var texto = document.getElementById('inputTexto').value.toLowerCase()
  var texto_cifrado = texto.replace(/e/gim, 'enter')
  var texto_cifrado = texto_cifrado.replace(/o/gim, 'ober')
  var texto_cifrado = texto_cifrado.replace(/i/gim, 'imes')
  var texto_cifrado = texto_cifrado.replace(/a/gim, 'ai')
  var texto_cifrado = texto_cifrado.replace(/u/gim, 'ufat')

  document.getElementById('imgdireita').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('texto2').innerHTML = texto_cifrado
  document.getElementById('copiar').style.display = 'show'
  document.getElementById('copiar').style.display = 'inherit'
}

function decodificar() {
  var texto = document.getElementById('inputTexto').value.toLowerCase()
  var texto_cifrado = texto.replace(/enter/gim, 'e')
  var texto_cifrado = texto_cifrado.replace(/ober/gim, 'o')
  var texto_cifrado = texto_cifrado.replace(/imes/gim, 'i')
  var texto_cifrado = texto_cifrado.replace(/ai/gim, 'a')
  var texto_cifrado = texto_cifrado.replace(/ufat/gim, 'u')

  document.getElementById('imgdireita').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('texto2').innerHTML = texto_cifrado
  document.getElementById('copiar').style.display = 'show'
  document.getElementById('copiar').style.display = 'inherit'
}

function copy() {
  var cont = document.querySelector('#texto2')
  cont.select()
  document.execCommand('copy')
  alert('Texto copiado')
}
