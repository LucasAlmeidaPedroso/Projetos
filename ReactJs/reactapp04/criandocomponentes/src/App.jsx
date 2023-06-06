import './App.css'

function App() {
  const nome = 'Lucas'
  const sobrenome = 'Almeida Pedroso'
  const nomecompleto = nome + ' ' + sobrenome
  const NomeMaiusculo = nomecompleto.toLowerCase()
  const NomeMinusculo = nomecompleto.toUpperCase()
  const valor1 = 10;
  const valor2 = 11;
  let idade = 32

  function calculo(operacao) {
    switch (operacao) {
      case 'soma':
        return valor1 + valor2;
      case 'subtracao':
        return valor1 - valor2;
      case 'multiplicacao':
        return valor1 * valor2;
      case 'divisao':
        return valor1 / valor2;
    }
  }
  function teste(){
    alert('teste');
  }
  return (

    <section className='ads'>
      <p>Ola Seja Bem Vindo {nome}</p>
      <p>Minha Idade {idade}</p>
      <p>Soma de {valor1}+{valor2} = <span>{calculo('soma')}</span></p>
      <p>Subtracao de {valor1}-{valor2} = <span>{calculo('subtracao')}</span></p>
      <p>Multilpicação de {valor1}*{valor2} = <span>{calculo('multiplicacao')}</span></p>
      <p>Divisão de {valor1}/{valor2} = <span>{calculo('divisao')}</span></p>
      <button onClick={teste}>Calcular</button>
    </section>
  )
}

export default App
