#!/usr/bin/env bash

osascript -e 'tell app "Finder" to open location "smb://:@marvel.grupofolha.intranet/infograficos"'
mkdir -p /Volumes/infograficos/equilibrioesaude/2020/historias-das-vitimas-do-novo-coronavirus/

printf '\n\e[1;33m%-6s\e[m\n' "┌-----------------------------------┐"
printf '\e[1;33m%-6s\e[m\n' "|                                   |"
printf '\e[1;33m%-6s\e[m\n' "|          Versão Produção          |"
printf '\e[1;33m%-6s\e[m\n' "|                                   |"
printf '\e[1;33m%-6s\e[m\n\n' "└-----------------------------------┘"

printf '\n\e[5;33m%-6s\e[m\n' "-------------------------------------"
printf '\e[5;33m%-6s\e[m' "           Gerando arquivos           "
printf '\n\e[5;33m%-6s\e[m\n\n' "-------------------------------------"

yarn build

printf '\n\e[5;33m%-6s\e[m\n' "-------------------------------------"
printf '\e[5;33m%-6s\e[m' "          Copiando projeto           "
printf '\n\e[5;33m%-6s\e[m\n\n' "-------------------------------------"
cp -r build/* /Volumes/infograficos/equilibrioesaude/2020/historias-das-vitimas-do-novo-coronavirus/

printf '\n\e[5;33m%-6s\e[m\n' "Url:"
printf '\e[1;33m%-6s\e[m\n\n' "https://arte.folha.uol.com.br/equilibrioesaude/2020/historias-das-vitimas-do-novo-coronavirus/"
