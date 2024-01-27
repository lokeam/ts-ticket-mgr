import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { DataSource } from "typeorm";
import { Ticket } from "./src/tickets/tickets.entity";
import { ticketRouter } from "./src/tickets/tickets.router";

// Instantiate express
const app:Express = express();
dotenv.config();

// Parse request Body
app.use(bodyParser.json());

// Use CORS install types
app.use(cors());

// Create DB connection
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DB,
  entities: [Ticket],
  synchronize: true,
});

const port = process.env.PORT;

AppDataSource.initialize().then(() => {

  app.listen(port);
  console.log('Data src initialized');
}).catch((error) => {
  console.error('Error during Data src initialization: ', error);
});

app.use('/', ticketRouter);
