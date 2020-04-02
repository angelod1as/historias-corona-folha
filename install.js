const fs =  require('fs');
const prompt = require('prompt');
const colors = require('colors/safe');
const { slugfy } = require('utils');

const packData = require('./package.json');

const templates = {
	staging: `#!/usr/bin/env bash

osascript -e 'tell app "Finder" to open location "smb://{{user}}:{{password}}@marvel.grupofolha.intranet/staging"'
mkdir -p /Volumes/staging/arte.folha.com.br/{{baseURL}}

printf '\\n\\e[1;33m%-6s\\e[m\\n' "┌-----------------------------------┐"
printf '\\e[1;33m%-6s\\e[m\\n' "|                                   |"
printf '\\e[1;33m%-6s\\e[m\\n' "|          Versão Staging           |"
printf '\\e[1;33m%-6s\\e[m\\n' "|                                   |"
printf '\\e[1;33m%-6s\\e[m\\n\\n' "└-----------------------------------┘"

printf '\\n\\e[5;33m%-6s\\e[m\\n' "-------------------------------------"
printf '\\e[5;33m%-6s\\e[m' "          Gerando arquivos           "
printf '\\n\\e[5;33m%-6s\\e[m\\n\\n' "-------------------------------------"

yarn build

printf '\\n\\e[5;33m%-6s\\e[m\\n' "-------------------------------------"
printf '\\e[5;33m%-6s\\e[m' "          Copiando projeto           "
printf '\\n\\e[5;33m%-6s\\e[m\\n\\n' "-------------------------------------"
cp -r build/* /Volumes/staging/arte.folha.com.br/{{baseURL}}


printf '\\n\\e[5;33m%-6s\\e[m\\n' "Url:"
printf '\\e[1;33m%-6s\\e[m\\n\\n' "http://staging.arte.folha.com.br/{{baseURL}}"
`,
	production: `#!/usr/bin/env bash

osascript -e 'tell app "Finder" to open location "smb://{{user}}:{{password}}@marvel.grupofolha.intranet/infograficos"'
mkdir -p /Volumes/infograficos/{{baseURL}}

printf '\\n\\e[1;33m%-6s\\e[m\\n' "┌-----------------------------------┐"
printf '\\e[1;33m%-6s\\e[m\\n' "|                                   |"
printf '\\e[1;33m%-6s\\e[m\\n' "|          Versão Produção          |"
printf '\\e[1;33m%-6s\\e[m\\n' "|                                   |"
printf '\\e[1;33m%-6s\\e[m\\n\\n' "└-----------------------------------┘"

printf '\\n\\e[5;33m%-6s\\e[m\\n' "-------------------------------------"
printf '\\e[5;33m%-6s\\e[m' "           Gerando arquivos           "
printf '\\n\\e[5;33m%-6s\\e[m\\n\\n' "-------------------------------------"

yarn build

printf '\\n\\e[5;33m%-6s\\e[m\\n' "-------------------------------------"
printf '\\e[5;33m%-6s\\e[m' "          Copiando projeto           "
printf '\\n\\e[5;33m%-6s\\e[m\\n\\n' "-------------------------------------"
cp -r build/* /Volumes/infograficos/{{baseURL}}

printf '\\n\\e[5;33m%-6s\\e[m\\n' "Url:"
printf '\\e[1;33m%-6s\\e[m\\n\\n' "https://arte.folha.uol.com.br/{{baseURL}}"
`,
}

// if (!packData.config || packData.config.section || packData.config.baseURL) {
	packData.config = {...packData.config};

	let configData = [
		{
			name: 'user',
			description: colors.green('Usuário:'),
			type: 'string',
		},
		{
			name: 'password',
			description: colors.green('Senha:'),
			type: 'string',
			hidden: true,
		},
	];

	if (!packData.config.section) {
		configData.push({
			name: 'section',
			description: colors.green('Editoria:'),
			type: 'string',
			required: true,
		});
	}


	if (!packData.config.baseURL) {
		const arrayURL = [
			{
				name: 'name',
				description: colors.green('Nome do projeto:'),
				type: 'string',
				required: true,
			},
			{
				name: 'date',
				description: colors.green('Data de publicação:'),
				type: 'string',
			},
			// {
			// 	name: 'baseURL',
			// 	description: colors.green('Mudar a URL padrão?'),
			// 	type: 'string',
			// },
		];
		configData = configData.concat(arrayURL);
	}

	prompt.message = colors.white('\n');
	prompt.delimiter = '';
	prompt.start();
	prompt.get(configData, (err, result) => {
		const name = packData.config.name || result.name;
		const section = packData.config.section || result.section;
		const date = packData.config.date || result.date;
		const user = result.user;
		const password = encodeURIComponent(result.password);
		packData.name = slugfy(name);
		const baseURL = packData.config.baseURL || `${slugfy(section)}/${date ? `${date.split('/').reverse().join('/')}/` : ''}${packData.name}/`;
		packData.config = {
			section,
			sectionSlug: slugfy(section),
			name,
			date,
			baseURL,
		};
		fs.writeFile(
			'package.json',
			JSON.stringify(packData, null, '\t'),
			(err) => {
				if (err) throw err;
				console.log('Projeto iniciado com sucesso!');
				fs.mkdir('./bin', { recursive: true }, (err) => {
					fs.writeFile(
						'./bin/production.sh',
						templates.production
							.replace(/{{baseURL}}/g, baseURL)
							.replace(/{{user}}/g, user)
							.replace(/{{password}}/g, password),
						{ mode: 0o755 },
						(err) => {
							if (err) throw err;
							console.log('Script de produção criado!');
						},
					);
					fs.writeFile(
						'./bin/staging.sh',
						templates.staging
							.replace(/{{baseURL}}/g, baseURL)
							.replace(/{{user}}/g, user)
							.replace(/{{password}}/g, password),
						{ mode: 0o755 },
						(err) => {
							if (err) throw err;
							console.log('Script de staging criado!');
						},
					);
				});
			},
		);

		// return false;
	});
// }
