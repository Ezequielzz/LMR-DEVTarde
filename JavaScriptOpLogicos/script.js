function verificar() {
    let numero = document.getElementById("nDigitado").value;

    let resultado = parseInt(numero) % 2

    if (numero % 2 == 0) {
        alert("O numero é par")
    } else {
        alert("O numero é ímpar")
    }
}

function realizar() {
    let valor1 = document.getElementById("nValor1").value;
    let valor2 = document.getElementById("nValor2").value;
    let operacoes = document.getElementById("loperacoes").value;

    let resultado;

    switch (operacoes) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2);
            alert("O resultado da operação é " + resultado);
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2);
            alert("O resultado da operação é " + resultado);
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2);
            alert("O resultado da operação é " + resultado);
            break;
        case "/":
            if (valor2 == 0) {
                alert("Não é possível dividir por 0");
            } else {
                resultado = parseInt(valor1) / parseInt(valor2);
                alert("O resultado da operação é " + resultado);
            }
            break;
        default:
            alert("Operação inválida");
            break;
    }
}
