function concatenar {
    let nome = document.getElementById("pNome").value;
    let sobrenome = document.getElementById("pSobre").value;

    let nomeCompleto = nome + " " + sobrenome;
    if (nome == null || sobrenome == null) {
        alert("Preencha Todos os Campos")
    } else {
        alert("Nome Completo: " + nomeCompleto);
    }

}