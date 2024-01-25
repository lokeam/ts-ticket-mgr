import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

const app:Express = express();
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DB,
  synchronize: true,
});

const port = process.env.PORT;

app.get("/", (request:Request, response:Response) => {
  response.send("Hello from Express Server");
});

AppDataSource.initialize().then(() => {

  app.listen(port);
  console.log('Data src initialized');
}).catch((error) => {
  console.error('Error during Data src initialization: ', error);
});
