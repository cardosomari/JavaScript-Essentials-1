let idade = 25;

if (true) {
    let idade = 30;
    console.log("Dentro do bloco:", idade); //30
}

console.log("Fora do bloco:", idade); //25

let idade = 25;

if (true) {
    var idade = 30;
    console.log("Dentro do bloco:", idade); //30
}

console.log("Fora do bloco:", idade); //30