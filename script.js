function calcular(){

    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso")
     
    let peso2 = peso.value
    let altura2 = altura.value

    let resultado = Number(peso2/(altura2*altura2))
    let result = resultado.toFixed(2)

    let element = document.getElementById("resultado")

  if(result < 18.5){
   
     element.innerHTML = `Seu IMC é de ${result} e está abaixo do peso`

} else if(result >=18.5 && result <=24.9)
{
    
    element.innerHTML = `Seu IMC é de ${result} Normal `

} else if(result >= 25 && result <=29.9){
    
    element.innerHTML = `Seu IMC é de ${result} Sobrepeso `

} else if(result >= 30 && result <= 39.9){
   
     element.innerHTML = `Seu IMC é de ${result} Obesidade `

} else if(result >= 40){
    
     element.innerHTML = ` Seu IMC é de ${result} Obesidade mórbida`;
}
  
}
