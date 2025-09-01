//Var-escopo de função, sofre hoisting
//Let-escopo de bloco, não sofre hoisting
//Const-escopo de bloco, não pode ser reatribuída
function exemplo(){
    if(true){
        var x = 10; //Função
        let y = 20; //Bloco
        const z = 30; //Bloco
    }
    console.log(x); //Funciona
    console.log(y); //Erro
    console.log(z); //Erro
}