//types 

//string
let nome: string = 'joao'; 
console.log(nome)
//nome = 28

//number 
let idade: number  = 39;
//idade = 'michel'
idade = 27.9
console.log('idade')

//boolean 
let possuicasa: boolean = false 
//possuicasa = 1;
console.log(possuicasa); 


//tipos explicitos 
let minhaIdade: number; 
minhaIdade = 27
//minhaIdade = '27' 
console.log(typeof minhaIdade); 

// array 
let jogadores: any[] = [ 'joao', 'michel', 'alan']
console.log(jogadores[0])
console.log(typeof jogadores)

jogadores = [5]
//hobbies = 100


//tupla 
let endereco: [string, number] = ['rua b', 10]
console.log(endereco)

//enum 
 enum Cor { 
     cinza, //0
     verde = 100, //1
     azul = 2,   //2 
 }

 let minhaCor: Cor = Cor.verde
 let minhaCor1: Cor = Cor.azul
 console.log(minhaCor)
 console.log(minhaCor1)

 //any
let carro: any = 'bmw';
console.log(carro)

carro = { marca: 'BMW', ano: 2019 }
console.log(carro)