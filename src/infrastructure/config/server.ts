require('dotenv').config();

const serverConfig = {
  api: {
    port: process.env.PORT || 3000,
    protocol: process.env.PROTOCOL || "http",
    environment: process.env.NODE_ENV || "development",
    baseURLDev: process.env.BASE_URL_DEV || "0.0.0.0",
    baseURLQas: process.env.BASE_URL_QAS || "0.0.0.0",
    baseURLPrd: process.env.BASE_URL_PRD || "0.0.0.0",
  },
  providers: {
    Dicionario: {
      apiBaseURL: process.env.API_BASE_URL
    }
  },
  databases: {
    postgreSQL: {
      dbHost: process.env.PG_DB_HOST,
      dbPort: process.env.PG_DB_PORT,
      dbName: process.env.PG_DB_NAME || "controle",
      dbUser: process.env.PG_DB_USER || "postgres",
      dbPass: process.env.PG_DB_PASS,
      dbCert: process.env.PG_DB_CERTIFICATE
    },
  },
  certificates: {
    sslKey: process.env.SSL_KEY,
    sslCert: process.env.SSL_CERT,
    sslCA1: process.env.SSL_CA1,
    sslCA2: process.env.SSL_CA2,
  },

  utils: {
    log: process.env.LOG,
    loginURL: process.env.API_BASE_URL,
    //tokenExpiresIn: process.env.TOKEN_EXPIRES_IN
  }
}

export default serverConfig