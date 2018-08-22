class Eleicao {
    constructor(ano) {
        this.ano = ano
        this.candidatos = []
    }

    setAno(novoAno) {
        this.ano = novoAno
    }
    addCandidatos(candidato){
        this.candidatos.push(candidato)
    }
    getAno(){
        return this.ano
    }
    
    getCandidatos(){
        return this.candidatos
    }
}

module.exports = Eleicao;