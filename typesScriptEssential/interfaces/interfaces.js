"use strict";
function saudarComOla(pessoa) {
    console.log('Olá', pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'michel';
}
const pessoa = {
    nome: 'João',
    idade: 12,
    saudar(sobrenome) {
        console.log('meu nome é ' + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'jonas', idade: 27, altura: 1.82})
pessoa.saudar('girao');
//usando classes 
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('olá, meu nome é ' + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'han';
saudarComOla(meuCliente);
meuCliente.saudar('solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    //Math.pow(3, 10)
    return base ** exp;
};
console.log(potencia(2, 10));
