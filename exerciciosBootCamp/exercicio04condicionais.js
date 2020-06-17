
// 1- Perguntar o nome do piloto
let pilotName = prompt("Qual o seu nome, piloto ?")

// 2- Colocar a velocidade inicial da nave como 0
let velocity = 0;

// 3- Perguntar a que velocidade ele gostaria de acelerar
let newVelocity = prompt("A que velocidade você gostaria de acelerar ? ")

// 4- Pedir uma confirmação informando que está indo para velocidade X km/s 
//     * Se quiser, atualizar a velocidade.
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")


if( confirmVelocity ) {
    velocity = newVelocity
} 

if( velocity <= 0 ) {
    alert("Nave está parada. COnsidere partir e aumentar a velocidade")
} else if( velocity < 40 ) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if( velocity < 80 ) {
    alert("Parece uma boa velocidade para manter.")
} else if( velocity < 100 ) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automatico forcado")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")