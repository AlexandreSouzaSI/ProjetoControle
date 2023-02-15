# L3HD Sebrae - Orchestrator

API que orquestra chamadas com redações para geração de relatórios de personalidade, consumindo a API do Speck.

## 🚀 Preparando e executando a aplicação

### Ambiente de desenvolvimento da aplicação

A aplicação foi desenvolvida em NodeJS (v14.17.6) com NPM (v6.14.15), no subsistema WSL Ubuntu (20.04).

### Instalando o projeto e suas dependências

```
  ~ git clone https://gitlab.com/kukac/bot-sebrae/orchestrator.git
  ~ cd orchestrator
  ~ yarn install (or npm install)
```

### Configurando o ambiente

Para executar esse módulo é necessário configurar as variáveis de ambiente que se encontram no arquivo `.env` ([dotenv](https://www.npmjs.com/package/dotenv)), seja alterando os valores neste arquivo ou configurando-as no ambiente de execução.

### Configurando a aplicação

Em DEV:

```
  ~ npm run config-dev:postgres
  ~ npm run config-dev:swagger
```

Em PRD:

```
  ~ npm run build
  ~ npm run config:postgres
  ~ npm run config:swagger
```

## Migrations e Seeders

Para executar migrations e seeders basta executar os comandos abaixo:
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all

### Executando a aplicação

Em DEV:

```
  ~ npm run dev
```

Em PRD:

```
  ~ npm start
```

## Variáveis de Ambiente

**Variável** => **Descrição** <br>
**PORT** => Porta de bind da aplicação backend (default: 3000) <br>
**LOG** => Flag para ativar ou não os logs da aplicação <br>
**SECRET_KEY** => Chave secreta da API <br>
**PG_DB_HOST** => Host do banco Postgres <br>
**PG_DB_PORT** => Porta do banco Postgres <br>
**PG_DB_USER** => Usuário do banco Postgres <br>
**PG_DB_PASS** => Senha do banco Postgres <br>
**PG_DB_NAME** => Nome do banco Postgres <br>
**PG_DB_CERTIFICATE** => Certificado do banco Postgres <br>
**SPECK_CORE_BASE_URL** => URL base da API core do Speck <br>
**SPECK_PDF_BASE_URL** => URL base da API de PDF do Speck <br>
**SPECK_IS_BASE_URL** => URL base da API IS do Speck <br>
**SPECK_PDF_ACCESS_SECRET** => Chave secreta de acesso à API do Speck <br>
**SPECK_AUTH_USER** => Usuário de acesso à API do Speck <br>
**SPECK_AUTH_PWD** => Senha de acesso à API do Speck <br>
**SPECK_AUTH_GROUP** => Grupo de acesso à API do Speck <br>
**SPECK_ESSAY_MIN_WORDS** => Quantidade mínima de palavras para análise <br>
**SPECK_PDF_TEMPLATE** => Template do PDF do Speck <br>
**SPECK_PDF_ANALYZE_CATEGORY** => Categoria da análise do Speck <br>

## Database

Banco relacional PostgreSQL <br>

**Colection** => **Descrição** <br>
**pdf-reports** => Tabela para armazenamento do relatórios <br>

---
