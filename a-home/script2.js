let i1 = document.getElementById('input1')
let i2 = document.getElementById('input2')

let resultado = document.getElementById('resultado')

let beep = document.getElementById('beep')


function somar () {
 let n1 = Number(i1.value);
 let n2 = Number(i2.value);
 
 let soma = n1+n2
 
 beep.play()
 
 resultado.value = soma
}

function subtrair () {
 let n1 = Number(i1.value);
 let n2 = Number(i2.value);
 
 beep.play()
 
 let subtrair = n1-n2
 
 resultado.value = subtrair
}

function multiplicar () {
 let n1 = Number(i1.value);
 let n2 = Number(i2.value);
 
 beep.play()
 
 let multiplicar = n1*n2
 
 resultado.value = multiplicar
}

function dividir () {
 let n1 = Number(i1.value);
 let n2 = Number(i2.value);
 
 beep.play()
 
 let dividir = n1/n2
 
 resultado.value = dividir
}