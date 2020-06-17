// 1 - Crie um arquivo JS e o importe no seu arquivo HTML.
//      * Este arquivo JS será utilizado para informar a diferença de idade entre duas pessoas.

// 2 - Pedir o nome da pessoa mais velha
let olderPersonName = prompt("Digite o nome da pessoa mais velha ")

// 3 - Pedir a idade da pessoa mais velha
let olderPersonAge = prompt("Digite a idade da pessoa mais velha")

// 4 - Pedir o nome da pessoa mais nova
let youngerPersonName = prompt("Digite o nome da pessoa mais nova")

// 5 - Pedir a idade da pessoa mais nova
let youngPersonAge = prompt("DIgite a idade da pessoa mais nova")

// 6 - Calcular a diferença de idade
let ageDifference = olderPersonAge - youngPersonAge

// 7 - Exibir o nome da pessoa mais velha e sua idade
  
//  8 - Exibir o nome da pessoa mais nova e sua idade 

//9 Exibir a diferença de idade

alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngPersonAge + 
    "\n\nDiferença de idade: " + ageDifference
)
