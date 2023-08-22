/*
*Enzo Eduardo
*
*/

/*
* 1. sera impresso o valor q foi colocado no código, mas neste caso vai ser impresso o número 10
* 2. sera imprsso o valor 10 pois todas as variaveis foram substituidas por este resuldado
* 3. prompt serve para pedir informações sejam elas pessoais ou n, mas para deixar expecificado as variaveis tem que ter nomes como "horas", "data" e etc.
*/
 let Nome;
 let Idade;
  console.log(typeof Nome);
  console.log(typeof Idade);  

/* 
* para identificar qual usuario esta acessando-a
*/

nome = prompt("qual seu nome");
idade = prompt("qual sua idade");
console.log("Ola", nome, "você tem", idade, "anos");
 
let sim;
let não;
let raramente;
sim = prompt("você vai para muitas festas?");
não = prompt("você trabalha?");
raramente = prompt("você vai no cinema?");
console.log("voce vai para muitas festas?",sim);
console.log("voce trabalha?",não);
console.log("voce vai no cinema?",raramente);

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);
//console.log(c);
