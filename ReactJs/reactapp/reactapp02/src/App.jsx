import './App.css'

function App() {
  let nome;
  let dataNascimento = "13/05/1996"

let  operacao = prompt("Digite a sua operação:")

  
  function Calculo(operacao, valor1, valor2) {
    switch (operacao) {
      case "soma":
        return valor1 + valor2;
      case "multiplication":
        return valor1 * valor2;
      case "division":
        return valor1 / valor2;
      case "subtration":
      return valor1-valor2;
    }
  }

  return (
    <section>
      
      <h1>{operacao}</h1>
      <p>Calcule soma = {Calculo("soma",1,2)}</p>
      <p>Calcule multiplicação = {Calculo("multiplication",1,2)}</p>
      <p>Calcule divisão = {Calculo("division",1,2)}</p>
      <p>Calcule subtração = {Calculo("subtration",1,2)}</p>
    </section>
  )
}

export default App
