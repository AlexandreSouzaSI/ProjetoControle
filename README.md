API que Gerencia Entradas ( Recebiveis ) e saidas ( contas a pagar ) com DRE e importação de informaçoes por PDF

## 🚀 Preparando e executando a aplicação

### Ambiente de desenvolvimento da aplicação

A aplicação foi desenvolvida em NodeJS (v14.17.6) com NPM (v6.14.15)

### Instalando o projeto e suas dependências

```
  ~ git clone https://github.com/AlexandreSouzaSI/ProjetoControle.git
  ~ cd ProjetoControle
  ~ yarn install (or npm install)
```

### Configurando o ambiente

Para executar esse módulo é necessário configurar as variáveis de ambiente que se encontram no arquivo `.env` ([dotenv](https://www.npmjs.com/package/dotenv)), seja alterando os valores neste arquivo ou configurando-as no ambiente de execução.

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
  ~ npm start:prod
```

## Variáveis de Ambiente

**Variável** => **Descrição** <br>
**PORT** => Porta de bind da aplicação backend (default: 3000) <br>
**DB_HOST** => Host do banco Postgres <br>
**DB_PORT** => Porta do banco Postgres <br>
**DB_USER** => Usuário do banco Postgres <br>
**DB_PASS** => Senha do banco Postgres <br>
**DB_NAME** => Nome do banco Postgres <br>

---
