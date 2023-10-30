
let withdraw
do {
    withdraw = Number(prompt(`Digite um valor para sacar: (notas disponíves de 50, 10, 5 e 1)`));
} while (withdraw <= 0 || isNaN(withdraw) || !Number.isInteger(withdraw));

let withdrawValue = withdraw
let fifty = 0
let ten = 0
let five = 0
let one = 0

while (withdraw >=50) { withdraw -= 50; fifty++ }
while (withdraw >=10) { withdraw -= 10; ten++   }
while (withdraw >=5 ) { withdraw -= 5 ; five++  }
while (withdraw >=1 ) { withdraw -= 1 ; one++   }

document.write(`Saque efetivado com sucesso! <br> Você receberá GC$ ${withdrawValue.toFixed(2).replace(".",",")} em: <br>`)
document.write(fifty>0? `${fifty} notas de GC$ 50,00, <br> `: ``)
document.write(ten>0  ? `${ten} notas de GC$ 10,00, <br> `: ``)
document.write(five>0 ? `${five} notas de GC$ 5,00, <br> `: ``)
document.write(one>0  ? `${one} notas de GC$ 1,00, <br> `: ``)
