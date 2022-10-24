//interface
interface Humano { 
    nome: string
    idade?: number
    [prop: string]: any 
    saudar(sobrenome: string): void 
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá', pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'michel'
}

const pessoa: Humano = { 
    nome: 'João',
    idade: 12,
    saudar( sobrenome: string) {
        console.log('meu nome é ' + this.nome + " " + sobrenome) 
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: 'jonas', idade: 27, altura: 1.82})
pessoa.saudar('girao');



//usando classes 
class Cliente implements Humano { 
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar( sobrenome: string) {
        console.log('olá, meu nome é ' + this.nome + " " +sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'han'
saudarComOla(meuCliente)
meuCliente.saudar('solo')

console.log(meuCliente.ultimaCompra)


// Interface funcao 
interface FuncaoCalculo  { 
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number { 
   //Math.pow(3, 10)
   return base ** exp 
}

console.log(potencia(2, 10)); 