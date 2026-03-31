// Write a program that prompts the user for five numbers and prints them in the
// reverse order they were entered
// (not reverse sorted). Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

       let maara = 0;
luvut =[];
    while (maara <5){
        const numero = prompt("anna 5 numeroa. ohjelma kysyy sinulta uuden kun painat enter ")
        luvut.push(numero)
        maara++;
    }

    for (let i = luvut.length -1;i >= 0; i--){
        document.write(luvut[i]);
    }

