let lista = []


let maara= parseInt(prompt("anna määrä"))
lista.push(maara)
for(let i =0; i <maara; i++){
    const anna = prompt(" osallistuja nmr " + (i +1) + " nimi on: ")
    lista.push({
        anna: nimi,
        aanet: 0
    })

}
console.log(lista)