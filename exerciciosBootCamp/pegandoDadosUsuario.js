// 1- Exiba com um alerta a seguinte mensagem de boas-vindas ao usuário
//      * Bem-Vindo! A seguir pediremos que informe alguns dados.

alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

// 2- Peça que usuário informe seu nome

let name = prompt("Informe seu nome: ")


// 3- Peça que o usuário informe sua idade

let age = prompt("Informe sua idade: ")

// 4- Peça que ele confirme a idade

let ageConfirmation = confirm("Sua idade é " + age + " ? ")

// 5- Exiba com um alerta:
//      * O nome do usuário digitado
//      * A idade digitada
//      * A confirmação da idade

alert("Nome: " + name + "\nIdade " + age + "\Idade confirmada: " + ageConfirmation);