function calcular() {
  let altura = document.getElementById("altura").value.replace(",", ".");
  let peso = document.getElementById("peso").value;

  let altura2 = parseFloat(altura);
  let peso2 = parseFloat(peso);

  let resultado = Number( peso2/(altura2 * altura2))

  let result = resultado.toFixed(2);

  let element = document.getElementById("resultado");

  if(altura.length == 0 && peso.length == 0){
    alert("[ERRO!] Corrija os dados")
  }

  if (result < 18.5) {
    element.innerHTML = `Seu IMC é de ${result} e está abaixo do peso`;

  } else if (result >= 18.5 && result <= 24.9) {
    element.innerHTML = `Seu IMC é de ${result} Normal `;

  } else if (result >= 25 && result <= 29.9) {
    element.innerHTML = `Seu IMC é de ${result} Sobrepeso `;

  } else if (result >= 30 && result <= 39.9) {
    element.innerHTML = `Seu IMC é de ${result} Obesidade `;

  } else if (result >= 40) {
    element.innerHTML = ` Seu IMC é de ${result} Obesidade mórbida`;
    
  }
}



const formatarAltura = (valor) => {
  valor = valor.replace(/[^0-9]/g, "")
  return valor.length > 1 ? valor[0] + "," + valor.slice(1, 3) : valor
}

const formatarPeso = (valor) => {
  valor = valor.replace(/[^0-9]/g, "");
  return valor.slice(0, -2) + "," + valor.slice(-2);
};
