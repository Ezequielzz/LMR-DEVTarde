function cadastrar() {
  var nome = document.getElementById("lnome").value;
  var senha = document.getElementById("lsenha").value;
  var email = document.getElementById("lemail").value;

  if (nome === "" || senha === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
    return;

  } else {
    alert("Cadastro realizado!");
    window.location.href = "login.html";
  }

  // Armazenar no localStorage
  localStorage.setItem("nome", nome);
  localStorage.setItem("senha", senha);

  document.getElementById("lnome").value = "";
  document.getElementById("lsenha").value = "";
}

function login() {
  var nome = document.getElementById("lnome").value;
  var senha = document.getElementById("lsenha").value;

  // Verificação de dados
  var storedNome = localStorage.getItem("nome");
  var storedSenha = localStorage.getItem("senha");

  if (nome === storedNome && senha === storedSenha) {
    alert("Login realizado!");
    window.location.href = "index.html";

  } else {
    alert("Nome de usuário ou senha incorretos!");
  }

  document.getElementById("lnome").value = "";
  document.getElementById("lsenha").value = "";
}
