const fs = require('fs');

const lerArquivo = (nomeArquivo, path = './') => {
	return new Promise((resolve, reject) => {
		fs.readFile(path + nomeArquivo, (err, data) => {		
			if (err) {
				reject(err);
			}

			resolve(data.toString());
		})
	})
}

exports.lerArquivo = lerArquivo;