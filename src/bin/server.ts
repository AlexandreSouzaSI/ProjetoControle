import { app } from "../app";
import Database from "../infrastructure/config/database";
import express from 'express'

class ServerApp{
    public app: express.Application
    private db: Database
    
    constructor() {
        this.app = app
        this.db = new Database()
      }


    public connectToTheDatabase() {
          this.db.
          connectPostgres()
          .then(() => {
          
          })
          .catch((error) => {
            console.log(error)
          })
      }
      

      public start(port: string | number) {
        this.app.listen(port, () => {
          console.log(`Express Application running on Port ${port}`)
        })
      }
    
}

export default ServerApp
