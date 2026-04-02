// Write a program that prompts the user for numbers.
// When the user enters one of the numbers previously entered,
// the program will announce that the number has already been given
// and stops its operation and then prints all the given numbers to the console
// in ascending order.



let  lista=[];

let numero=parseInt(prompt(" anna numero kunnes annat saman numeron"));

while (numero !== 0){
    lista.push(numero);
      numero=parseInt(prompt(" anna numero kunnes annat saman numeron"));

      if (lista.includes(numero)){
          alert("anatamasi numero oli jo listalla");
          alert(" numerot ovat consolissa")
          lista.push(numero);
          lista.sort((a, b) => a-b);
          console.log(lista);

          break
      }
}


