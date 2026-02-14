// alert("Boas vindas ao nosso site");

// let nome = prompt("Qual o seu nome?");
// let idade = Number(prompt("Qual sua idade?"));
// let numeroDeVendas = Number(prompt("Quantas vendas fez?"));
// let saldoDisponivel = Number(prompt("Qual saldo disponivel?"));

// if ((nome && idade && numeroDeVendas && saldoDisponivel) !== "") {
//   alert("Dados Validos");
// } else {
//   alert("Dados Invalidos");
// }



// // Arrays com os dias válidos
// let fimDeSemana = ["sabado", "domingo"];
// let diasUteis = ["segunda", "terca", "quarta", "quinta", "sexta"];

// // Variável que controla o loop
// let diaValido = false;

// // Loop roda enquanto o usuário não digitar um dia correto
// while (!diaValido) {

//   // Pede o dia e converte para minúsculo
//   let dia = prompt("Digite um dia da semana").toLowerCase();

//   // Verifica se está no array de fim de semana
//   if (fimDeSemana.includes(dia)) {
//     alert("Hoje é fim de semana!");
//     diaValido = true; // encerra o loop
//   }

//   // Verifica se está no array de dias úteis
//   else if (diasUteis.includes(dia)) {
//     alert("Hoje é dia útil!");
//     diaValido = true; // encerra o loop
//   }

//   // Caso não esteja em nenhum array
//   else {
//     alert("Dia inválido! Tente novamente.");
//   }
// }



// let numero = Number(prompt("Digite um número"));
// if (numero < 0) {
//   alert("O número é negativo");
// } else if (numero > 0) {
//   alert("O número é positivo");
// } else {
//   alert("O numero é nulo");
// }

// let numeroSorteado = Math.floor(Math.random() * 11);

// let pontos = 100;
// let tentativas = 0;
// let maxTentativas = 10;

// while (tentativas < maxTentativas) {
//   let chute = Number(prompt("Digite um número entre 0 e 10"));
//   tentativas++;

//   if (chute === numeroSorteado) {
//     alert(`Parabéns! Você acertou!\nPontuação: ${pontos}`);
//     break;
//   } else {
//     pontos -= 10;
//     alert("Errou!");
//     if (numeroSorteado > chute) {
//       alert("O numero sorteado é maior que " + chute);
//     } else {
//       alert("O numero sorteado é menor que " + chute);
//     }
//   }
// }

// if (pontos <= 0) {
//   alert(
//     `Fim de jogo! O número era ${numeroSorteado} e sua pontuação final é ${pontos}, com ${tentativas} tentativas.`
//   );
// }

// let contador = 1;
// while (contador <= 10) {
//   console.log(contador);
//   contador++;
// }

// let contador = 10;
// while (contador >= 0) {
//   console.log(contador);
//   contador--;
// }

// let sorteado = Math.floor(Math.random() * 100);
// while (sorteado >= 0) {
//   console.log(sorteado);
//   sorteado--;
// }

// let sorteado = Math.floor(Math.random() * 50);
// let contador = 0;

// while (contador <= sorteado) {
//   console.log(contador);
//   contador++;
// }
