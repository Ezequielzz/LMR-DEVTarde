function boasVindas() {
    let nome;
    let sobrenome;

    nome = prompt("Digite o Seu Nome", "Digite Aqui");
    sobrenome = prompt("Digite o Seu Sobrenome", "Digite Aqui");

    alert("Olá " + nome + " " + sobrenome);
}

function somar() {
    let valor1, valor2, resultado;
    valor1 = prompt("Digite um nº");
    valor2 = prompt("Digite um nº");

    resultado = parseInt(valor1) + parseInt(valor2);

    alert(valor1 + " + " + valor2 + " = " + resultado);
}


function subtracao() {
    let valor1, valor2, resultado;
    valor1 = prompt("Digite um nº");
    valor2 = prompt("Digite um nº");

    resultado = parseInt(valor1) - parseInt(valor2);

    alert(valor1 + " - " + valor2 + " = " + resultado);
}


function multiplicacao() {
    let valor1, valor2, resultado;
    valor1 = prompt("Digite um nº");
    valor2 = prompt("Digite um nº");

    resultado = parseInt(valor1) * parseInt(valor2);

    alert(valor1 + " x " + valor2 + " = " + resultado);
}


function divisao() {
    let valor1, valor2, resultado;
    valor1 = prompt("Digite um nº");
    valor2 = prompt("Digite um nº");

    resultado = parseInt(valor1) / parseInt(valor2);
    if (valor1 == 0 || valor2 == 0) {
        alert("Não é Possível dividir por 0")
    } else {
        alert(valor1 + " / " + valor2 + " = " + resultado);
    }


}
