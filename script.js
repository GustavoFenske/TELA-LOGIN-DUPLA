let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "cadastro" : "login";
    document.querySelector ("button").innerText = cadastro ? "cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro ? "já tem conta? faça login" : "nao tem conta? Cadastre-se!";
    document.getElementById("mensagem").innerHTML = "";
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem").value;

    mensagem.innerHTML = " ";

    if (usuario.length < 0 ) {
        mensagem.innerHTML = "<div class='erro'><p> digite um usuário!</p></div>";
        return;
    }

    if (senha.length <= 0) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta!</p></div>";
        return;
    }
}