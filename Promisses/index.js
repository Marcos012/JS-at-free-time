const fsPromise = require('./FileSystemPromises');

fsPromise.lerArquivo('teste.txt')
	.then(conteudo => console.log(conteudo))
	.catch(err => console.log(err))