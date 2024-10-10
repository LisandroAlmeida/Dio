function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;
  let nivel2;

  // Definindo o nivel baseado nas vitórias totais como no exercicio
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  // Definindo o nivel2 baseado no saldo de vitórias (saldoVitorias)
  if (saldoVitorias < 10) {
    nivel2 = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel2 = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel2 = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel2 = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel2 = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel2 = "Lendário";
  } else if (saldoVitorias >= 101) {
    nivel2 = "Imortal";
  }

  return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel} / ${nivel2}`;
}

let vitoriasJogador = 85;
let derrotasJogador = 30;
let resultado = calcularRankeadas(vitoriasJogador, derrotasJogador);

console.log(resultado);
