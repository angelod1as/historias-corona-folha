# Folhastyle


## Variáveis do template

| Variável | Obrigatório | Valor padrão | Descrição |
|---|---|---|---|
| cover_date | Sim | | Data completa da publicação Ex. `19.fev.1921` |
| cover_date_day | Sim | | Dia da publicação. Somente número. Ex. `19` |
| cover_date_month | Sim | | Mês da publicação. Somente número. Ex. `02` |
| cover_date_year | Sim | | Ano da publicação. Somente número. Ex. `1921` |
| cover_time | Sim | | Horário da publicação. Ex. `17h58` ou `2h00` |
| cover_time_hour | Sim | | Hora de publicação. Somente número. Ex. `17` |
| cover_time_minute | Sim | | Minuto da publicação. Somente número. Ex. `58` |
| credit | Sim | | Quem fez Ex. `Carlos Drummond` ou `Vinicius de Moraes<br>Tom Jobim` |
| graphic_type | Sim | | Define o tipo de infográfico Ex. `ai2html`, `folhagrafico`, `mapa` |
| image | Sim | | Imagem de compartilhamento Ex. `` |
| kicker | Sim | | Chapéu ou chapéis Ex. `` |
| lead | Sim | | Linha fina da matéria Ex. `` |
| nav_items | Não | | Incluir `<li>` dentro da tag `nav` do header |
| section | Sim | | Nome da editoria Ex. `Cotidiano` |
| section_slug | Sim | | Slug da editoria Ex. `cotidiano` e `equilibrio-e-saude` |
| show_ads | Sim | true | Mostrar anúncios |
| show_header_folha | Sim | true | Mostrar anúncios antes do cabeçalho da matéria |
| show_header_folha | Sim | true | Mostra os topos do UOL e da Folha |
| show_header_news | Sim | true | Mostra o cabeçalho da reportagem |
| show_title_header | Sim | true | Mostra o título da página no header |
| special | Não | | Nome do especial Ex. `Eleições 2018` |
| special_url | Não | | Url da página especial da Folha Ex. `https://www1.folha.uol.com.br/poder/eleicoes-2018/` |
| title | Sim | | Título da página |
| update_date | Sim | | Data completa da atualização Ex. `23h32` |
| update_date_day | Sim | | Dia da atualização Ex. `01` |
| update_date_month | Sim | | Mês da atualização Ex. `08` |
| update_date_year | Sim | | Ano da atualização Ex. `2018` |
| update_time | Sim | | Horário completo da atualização Ex. `23h32` |
| update_time_hour | Sim | | Hora da atualização Ex. `23` |
| update_time_minute | Sim | | Minuto da atualização Ex. `32` |
| url | Sim | | URL da páginda Ex. |


## Atualizar o paywall

Ao atualizar o paywall, é necessário incluir manualmente o três atributos na tag `<script data-paywall>`, `data-paywall-wall-register="no"     data-paywall-wall-env="folha" data-paywall-product="portal"`.

A tag deverá ficar assim: `<script data-paywall data-paywall-wall-register="no" data-paywall-wall-env="folha" data-paywall-product="portal">`
