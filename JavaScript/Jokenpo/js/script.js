let player1 = ["", ""];
let player2 = ["", ""];
let vez;
function iniciarJogo() {
  player1[0] = prompt("Digite o nome do primerio jogador")
  player2[0] = prompt("Digite o nome do primerio jogador")

  document.getElementById('jogador1').innerHTML = player1[0]
  document.getElementById('jogador2').innerHTML = player2[0]
  document.getElementById('jg').style = "display: none";
  document.getElementById('sbl').style = "display: block";
  setTimeout(function () { alert(player1 + " sua vez de jogar") }, 500)
  vez = player1[0];
}

function jogar(hand) {
  if (vez == player1[0]) {
    vez = player2[0];
    player1[1] = hand
  }
  else {
    vez = player1[0];
    player2[1] = hand
  }
  if ((player1[1] == player2[1])) {
    alert("Empate Jogue novamente");
    player1[1] = "";
    player2[1] = "";
    alert(vez + " é a sua vez");
    return;
  }
  if (player1[1] != "" && player1[2] != "") {
    let result = parseInt(player1[1]) + parseInt(player2[1]);
    switch (result) {
      case 3:
        if (player1[1] == 2)
          alert(" Papel cobre pedra, parabéns " + player1[0] + " Você ganhou");
        else
          alert(" Papel cobre pedra, parabéns " + player2[0] + " Você ganhou");
        fimdejogo()
        return
      case 4:
        if (player1[1] == 1)
          alert(" Pedra amassa tesoura, parabéns " + player1[0] + " Você ganhou");
        else
          alert(" Pedra amassa tesoura, parabéns " + player2[0] + " Você ganhou");
        fimdejogo()
        return
      case 5:
        if (player1[1] == 3)
          alert(" Tesoura corta papel, parabéns " + player1[0] + " Você ganhou");
        else
          alert(" Tesoura corta papel, parabéns " + player2[0] + " Você ganhou");
        fimdejogo()
        return
    }
  }
  alert(vez + " é a sua vez");
}

function fimdejogo() {
  let valid = confirm("Deseja jogar novamente?");
  if (valid) {
    player1[1] = "";
    player2[1] = "";
    alert(vez + " é a sua vez");
  }
  else {
    location.reload();
    setTimeout(function () {}, 1000)
  }
}


