const empresa = [
    {
        nome: "RocketSeat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gambala",
            numero: 260
        }
    }
]

console.log(`A empresa  ${empresa[0].nome} está localizada em ${empresa[0].endereco.rua}, ${empresa[0].endereco.numero}`)


const programador = [
    {
        nome: "Carlos",
        idade: 32,
        tecnologias: [
            {nome: "C++", especialidade: "Desketop"},
            {nome: "JavaScript", especialidade: "Web/Mobile"}
        ]
    }
]

console.log(` o Usuario ${programador[0].nome} tem ${programador[0].idade} e usa as tecnologias ${programador[0].tecnologias[0].nome} com especialidade em ${programador[0].tecnologias[0].especialidade} `)