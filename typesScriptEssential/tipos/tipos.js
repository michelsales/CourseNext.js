"use strict";
//types 
//string
let nome = 'joao';
console.log(nome);
//nome = 28
//number 
let idade = 39;
//idade = 'michel'
idade = 27.9;
console.log('idade');
//boolean 
let possuicasa = false;
//possuicasa = 1;
console.log(possuicasa);
//tipos explicitos 
let minhaIdade;
minhaIdade = 27;
//minhaIdade = '27' 
console.log(typeof minhaIdade);
// array 
let jogadores = ['joao', 'michel', 'alan'];
console.log(jogadores[0]);
console.log(typeof jogadores);
jogadores = [5];
//hobbies = 100
//tupla 
let endereco = ['rua b', 10];
console.log(endereco);
//enum 
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 100] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
let minhaCor1 = Cor.azul;
console.log(minhaCor);
console.log(minhaCor1);
//any
let carro = 'bmw';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
