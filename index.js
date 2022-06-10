function calculate () {
  var height=document.getElementById("height").value
  var weight=document.getElementById("weight").value

  var imc = weight / height ** 2

  var text=""
  
  if(imc<18.5){
    text="Você esta abaixo do peso ideal"
  } else if(imc<24.9){
    text="Você esta no peso ideal"
  } else if(imc<29.9){
    text="Você está com sobrepeso"
  } else if(imc<39.9){
    text="Você está com obesidade"
  } else if(imc>39.9){
    text="Você está com obesidade mórbida"
  }

  document.getElementById("text_area").innerText = text

}