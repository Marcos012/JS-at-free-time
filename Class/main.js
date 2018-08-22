const Candidato = require('./candidato');
const Eleicao = require('./eleicao');

const candidato1 = new Candidato();
const candidato2 = new Candidato();

candidato1.setNome('Marcos')
candidato1.setCodigo(17)
candidato1.setNomePartdo("JS for Life");

candidato2.setNome('Taz')
candidato2.setCodigo(13)
candidato2.setNomePartdo("Java da Depressão");

let eleicao = new Eleicao();

eleicao.setAno(2018)
eleicao.addCandidatos(candidato1)
eleicao.addCandidatos(candidato2);

for (let i = 0; i < 30; i++) {
  if (i % 3 == 0) {
    eleicao.getCandidatos()[1].adicionarVotos();
  } else {
    eleicao.getCandidatos()[0].adicionarVotos();
  }
}
console.log("\nCandidatos:");
console.log(eleicao.getCandidatos()[1].getNome() + " (" + eleicao.getCandidatos()[1].getNomePartido() + "): " + eleicao.getCandidatos()[1].getQuantidadeDeVotos() + " votos");
console.log(eleicao.getCandidatos()[0].getNome() + " (" + eleicao.getCandidatos()[0].getNomePartido() + "): " + eleicao.getCandidatos()[0].getQuantidadeDeVotos() + " votos");