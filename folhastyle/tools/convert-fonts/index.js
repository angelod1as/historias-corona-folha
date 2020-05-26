// to run: node node-base64-encode.js file
const mime = require('mime'); // npm install mime
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const crypto = require('crypto');

const weights = {
	light: 300,
	regular: 400,
	medium: 500,
	semi: 600,
	semibold: 600,
	bold: 700,
	black: 800,
};

const hash = crypto.createHash('md5').update(`Folha de S.Paulo-${new Date().getTime()}`).digest('hex');

console.log('hash', hash);

const fonts = ['FolhaGrafico', 'FolhaTexto', 'FolhaII'];
// const fonts = ['FolhaGrafico',];
const extensions = ['woff2', 'woff', 'ttf', 'eot'];
// const extensions = ['woff2'];


for (let f = 0; f < fonts.length; f++) {
	const font = fonts[f];

	for (let ex = 0; ex < extensions.length; ex++) {
		const extension = extensions[ex];
		// let fonts = '';

		glob(`../../fontes-2018-web/${font}/${extension}/**.${extension}`,(error, files) => {
			const fontAtual = [];
			let total = 0;
			// console.log(files);
			files.forEach((file, i) => {
				const fileType = path.basename(file).split('.')[0].split('_');
				// console.log(pathFile.split('_'));
				const weight = weights[fileType[0].toLocaleLowerCase()];
				const italic = fileType[1] ? (fileType[1].toLocaleLowerCase() === 'italic' ? 'font-style:italic;' : '') : '';
				// path to the file we passed in
				fs.readFile(file, {
					encoding: 'base64',
				}, (err, data) => {
					if (err) {
						throw err;
					}
					// get the mimetype
					var filemime = mime.getType(file);
					// make me a string
					var output = 'data:' + filemime + ';base64,' + data;
					console.log(font, extension, weight);
					// show me!
					const fontCss = `@font-face{font-family:${font};font-weight:${weight};${italic}src:url(${output}) format("${extension}");}`;
					// console.log('fontCss', fontCss)
					fontAtual.push(fontCss);
					return true;
				});
				return true;
			});
			const interval = setInterval(() => {
				if (fontAtual.length === files.length) {
					const finalFile = `fspFont({'css':'${fontAtual.join('')}'});`;
					const filename  = `${font.toLocaleLowerCase()}-${extension.toLocaleLowerCase()}-${hash}.json`
					fs.writeFile(`./results/${filename}`, finalFile, );
					fs.writeFile(`/Volumes/staging/arte.folha.com.br/library/fonts/teste/${filename}`, finalFile, );
					clearInterval(interval);
				}
			}, 1000);
		});
	}
}
