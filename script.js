
let select = document.getElementById("opções")

function redirecionar (){
  
  let URL = select.value;
  
  if (URL) {
    window.location.href = URL;
  }
}
