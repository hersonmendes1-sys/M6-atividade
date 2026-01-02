var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var tentativas = 5;

function verificarChute() {
var mensagemDica = "";
var resultado = "";
var chute = parseInt(document.getElementById("chute").value);
tentativas--;

if (chute === numeroSecreto) { 
        resultado = "Parabéns! Você acertou o número!";
    }
    else if (tentativas === 0) {
        resultado = "Suas tentativas acabaram! O número era " + numeroSecreto + ".";
    }
    else if (chute < numeroSecreto) {
        mensagemDica = "Dica: Tente um número maior!";
    }
    else if (chute > numeroSecreto) {
        mensagemDica = "Dica: Tente um número menor!";
    }

    if (isNaN(chute) || chute < 1 || chute > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        tentativas++;
    }

    document.getElementById("retornoChute").innerHTML = "Seu chute foi: " + chute;
    document.getElementById("mensagemDica").innerHTML = mensagemDica;
    document.getElementById("tentativasRestantes").innerHTML = "Você tem " + tentativas + " tentativas";
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("chute").value = "";
}