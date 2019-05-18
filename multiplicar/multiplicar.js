const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)) {
			reject(`El parámetro ${base} no es un número`);
			return;
		}

		console.log("====================".green);
		console.log(`tabla de ${base}`.green);
		console.log("====================".green);

		let data = "";
		for (let i=0; i <= limite; i++){
			data += `${base} * ${i} = ${base * i}\n`;
		}

		resolve(`${data}`);
	});
}

let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)){
			reject(`El parámetro ${base} no es un número`);
			return;
		}
		let data = "";

		for (let i=1; i <= limite; i++){
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
			if (err)
				reject(err)
			else
				resolve(`tabla-${base}`);
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}