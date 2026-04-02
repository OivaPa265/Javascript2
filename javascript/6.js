//Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters.
// Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll in an unordered list
let lista = [];

function noppa() {
    let heitto;

    do {
        heitto = Math.floor(Math.random() * 6) + 1;
        lista.push(heitto);
        alert(lista);
    } while (heitto !== 6);
}

noppa();

