class Candidato {
    constructor(nome, codigo, nomePartido) {
        this.nome = nome
        this.codigo = codigo
        this.nomePartido = nomePartido
        this.quantidadeDeVotos = 0
    }

    setNome(novoNome) {
        this.nome = novoNome
    }
    setCodigo(novoCodigo){
        this.codigo = novoCodigo
    }
    setNomePartdo(novoNomePartido){
        this.nomePartido = novoNomePartido
    }
    adicionarVotos(){
        this.quantidadeDeVotos++
    }
    getNome(){
        return this.nome
    }
    getCodigo(){
        return this.codigo
    }
    getNomePartido(){
        return this.nomePartido
    }
    getQuantidadeDeVotos(){
        return this.quantidadeDeVotos
    }
}
module.exports = Candidato;