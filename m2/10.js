var mensagem = "Sou uma variável global";
function exibirMensagem() {
    let local = "Sou uma variável local";
    console.log(mensagem);
    console.log(local);
}
exibirMensagem()
    console.log(mensagem); //Funciona
    console.log(local); //Dá erro