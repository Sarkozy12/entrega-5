
const materias = [
    ["Instalações Prediais", "Máquinas Elétricas", "NR10"],
    ["Sistema eletroeletrônicos", "Sistemas Analógicos", "máquinas Elétricas"]
]

class Estudante{
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
}

const estudante1 = new Estudante("Cassio Ramos", "ramos.cassio@email.com", "122012", "Eletrotécnica", materias[0])
const estudante2 = new Estudante("Fábio Santos", "tiochico@email.com", "072012", "Eletroeletrônica", materias[1])

console.log(estudante1)
console.log(estudante2)

















/*const lista = ["Item 1", "Item 2", "Item 3"]

const mt = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(lista[0])
console.log(mt[1][1])


mt.forEach(function(item){
    item.forEach(function(valor){
    console.log(valor)
    })
})

const pessoa = {
    nome: "Etwaldo",
    idade: 20
}

console.log(pessoa.nome)

pessoa.nome = "Creitin"
pessoa.cpf = "12345678910"

console.log(pessoa)

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    podeDirigir(){
        return (this.idade >= 18)? "Pode" : "Não pode"
    }
}

const pessoa2 = new Pessoa("Jorgin",35)

console.log(pessoa2.podeDirigir())*/