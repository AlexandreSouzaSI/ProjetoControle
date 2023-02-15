import * as dotenv from 'dotenv'
import ServerApp from './server'

dotenv.config()

const app = new ServerApp()

const port = process.env.PORT || 3002

app.start(port)
app.connectToTheDatabase()