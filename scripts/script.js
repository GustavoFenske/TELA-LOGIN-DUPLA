let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "CADASTRO" : "LOGIN";
    document.querySelector ("button").innerText = cadastro ? "cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro 
    ? "já tem conta? faça login!" 
    : "nao tem conta? Cadastre-se!";
    
    document.getElementById("mensagem").innerHTML = " ";
    
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");    

        mensagem.innerHTML = "";


        if (cadastro){
            localStorage.setItem(usuario,senha);
            mensagem.innerHTML = "<div class = 'sucesso'> <p> Cadastro com sucesso</p><div>"; 

        } else {
            let salva = localStorage.getItem(usuario);
            if ((usuario === "admin") && (senha === "1234")){
               mensagem.innerHTML = "<div class = 'sucesso'> <p> login com sucesso</p><div>";   
                window.location.href = "home.html";

            } else{
                mensagem.innerHTML = "<div class = 'erro'> <p> Dados incorreto!</p><div>";
    
            }
        }
        document.getElementById("form-login").reset();
    } 

    

    
