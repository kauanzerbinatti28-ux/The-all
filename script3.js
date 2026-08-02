let data = new Date()
let dia = data.toLocaleDateString('pt-BR', {dateStyle:'short'});

document.getElementById('tempo').innerHTML = "hoje é : "+dia
let horas = document.getElementById('horas')

setInterval(function () {
  let date = new Date()
  horas.innerHTML = date.toLocaleTimeString()
}, 1000)

function cronômetro () {
  
  cro = setInterval(function(){
    
    var cronômetro = document.getElementById('hours').innerHTML;
    
    var soma = parseInt(cronômetro)+1;
    document.getElementById("hours").innerHTML = soma
  
  },1000)
}

function pararcontagem() {
 clearInterval(cro)
}

function iniciatimer() {
  
  var input = document.getElementById("input")
  var resultado = document.getElementById("hrs")
  
  resultado.innerText = input.value
  
  timer = setInterval(function(){
    let beep = document.getElementById("beep")
    var tempo = document.getElementById("hrs").innerHTML
    
    var timer = parseInt(tempo)-1;
    document.getElementById("hrs").innerHTML = timer
    
    if(tempo==0){
      alert("o timer acabou")
      beep.play()
      beep.play()
      beep.play()
      }
    
  },1000)
}

function paratimer(){
  clearInterval(timer)
}