import { db } from '../databases/postgreSQL/postgreSQL'

class Database {
  public async connectPostgres (): Promise<void> {
    try {
      await db
        .authenticate()
        .then(() =>
          console.log('Postgres database successfully connected!!!')
        )
        .catch((err) =>
          console.log('Erro: aqui' + err)
        )
    } catch (err) {
      console.log('Erro: aqui2' + err)
    }
  }
}

export default Database
