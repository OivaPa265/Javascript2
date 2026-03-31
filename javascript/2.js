//Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants
// on the web page in an ordered list (<ol>) in alphabetical order.


const monta = parseInt(prompt("monta"));

jasen =[];

for (let i = 0; i <monta; i++ ){

    const nimi = prompt("jasenen nimi" +(i +1));

    jasen.push(nimi);
}
 jasen.sort();

 document.write("<ol>");

for (let i = 0; i < jasen.length; i++) {
    document.write("<li>" + jasen[i] + "</li>");
}

document.write("</ol>");
