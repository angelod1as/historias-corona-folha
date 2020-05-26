# UTILS

Várias funções úteis para o dia a dia

## prettyText

Estiliza o texto com caracteres incorretos tipograficamente e/ou caracteres não aceitos no Spiffy

`param {string}` texto a ser corrigido

`returns {string}`

`correctType('"Água, \'água\', é d\'água!" --teste-- m3 ou m2... 1\'2"3 <a class="hidden">link</a>?') === '“Água, ‘água’, é d’água!” –teste– m³ ou m²… 1\'2"3 <a class="hidden">link</a>`

## slugfy

Retira sinais de pontuação, acentos etc. retornando um texto em formato de slug. Separando com ou sem hífens (padrão) e alterando para URLs se necessário (padrão) (ex.: `1º turno` retornando `primeiro-turno`).

`param text {string}` texto a ser slugificado

`param options {object}`

`options > 'hyphens' {boolean}`

`options > 'url' {boolean}`

`returns {string}`

`slugfy('Texto com espaço ã ó') === 'texto-com-espaco-a-o'`

## getBrowser

Retorna navegador, versão e nomenclatura de classes do navegador do usuário.

`returns {object}`

`browser, version, class`

## hex2rgba

Transforma cor hash e RGB em RGBA.

`param {color/string}` exemplos: `#333`, `#00adef`, `rgb(30, 90, 255)`

`param {opacity}` opcional: opacidade de 0 a 1 (padrão 1)

`returns {string}`

`hex2rgba('#333', .5) => 'rgba(51,51,51,.5)'`

## isMobile

Retorna se o usuário está usando mobile ou não

`no params`

`returns {boolean}`

`isMobile() === true`

## folhaDate

Retorna o formato das datas no padrão **Folha** (`1.jan.1994`) em formato `Date`

`param {string}`

`returns {Date}`

## styledNumber

Retorna o valor formatado conforme as opções (padrão `1.250,25`)

`param {Number}`

`returns {String}`

`styledNumber(12546.2) === '12.546,20'`

## queryAsObject

Retorna `window.location.search` parseado em objeto
