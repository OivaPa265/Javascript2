// Write a program that asks the user for numbers until the user gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

let  lista=[];
let numero=parseInt(prompt(" anna numero"));

while (numero !== 0){
    lista.push(numero);
      numero=parseInt(prompt(" anna numero"));
}


    alert("vastaukset ovat consolissa")
    lista.sort((a, b) => b-a );
console.log(lista);
