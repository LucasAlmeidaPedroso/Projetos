function calculate() {
  var height = document.getElementById("height").value / 100;
  var weight = document.getElementById("weight").value;
  var calculator = document.getElementsByClassName("container")
  var body = document.getElementsByTagName("body")
  var h1 = document.getElementsByTagName("h1")
  var h2 = document.getElementsByTagName("h2")
  var imc = weight / height ** 2;
  var text = ""
  body[0].style.backgroundColor = 'white';
  if (imc < 18.5) {
    text = "Você está magro"
    calculator[0].style.backgroundColor = 'green';
  } else if (imc < 24.9) {
    text = "Você está normal"
    calculator[0].style.backgroundColor = 'black';
  } else if (imc < 29.9) {
    text = "Você está com sobrepeso"
    calculator[0].style.backgroundColor = '#e6cf03';
    h1[0].style.color = 'black';
    h2[0].style.color = 'black';
    h2[1].style.color = 'black';

  } else if (imc < 39.9) {
    text = "Você está com obesidade"
    calculator[0].style.backgroundColor = 'red';
  } else if (imc > 39.9) {
    text = "Você está com obesidade mórbida"
    calculator[0].style.backgroundColor = 'red';
    body[0].style.backgroundColor = 'yellow';
  }
  document.getElementById("text_area").innerText = text
}
