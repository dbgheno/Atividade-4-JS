
let saque
do {
    saque = Number(prompt(`Digite um valor para sacar: (notas disponíves de 50, 10, 5 e 1)`));
} while (saque <= 0 || isNaN(saque) || !Number.isInteger(saque));

let valorSacado = saque
let fifty = 0
let ten = 0
let five = 0
let one = 0

for (saque; saque >=50; saque -= 50) {
    fifty++
}

for (saque; saque >=10; saque -= 10) {
    ten++
}

for (saque; saque >=5; saque -= 5) {
    five++
}

for (saque; saque >=1; saque -= 1) {
    one++
}

document.write(`Saque efetivado com sucesso! <br> Você receberá GC$ ${valorSacado.toFixed(2).replace(".",",")} em: <br>`)
document.write(fifty>0?`${fifty} notas de GC$ 50,00, <br> `: ``)
document.write(ten>0?`${ten} notas de GC$ 10,00, <br> `: ``)
document.write(five>0?`${five} notas de GC$ 5,00, <br> `: ``)
document.write(one>0?`${one} notas de GC$ 1,00, <br> `: ``)
