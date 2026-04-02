let lista = [];



let numero= parseInt(prompt(" monta "))
function noppa() {
    let heitto;

    do {
        heitto = Math.floor(Math.random() * numero) + 1;

        lista.push(heitto);

    } while (heitto !== numero);
}

noppa();
alert(lista);