import "reflect-metadata"
import { AppDataSource } from "./data-source"
import express, { Request, Response, json } from 'express';
import { UserController } from "./controller/UserController";
import { UserDTO } from "./dto/UserDTO";
import { CurrencyController } from "./controller/CurrencyController";
import { CurrencyDTO } from "./dto/CurrencyDTO";
import { WalletController } from "./controller/WalletController";
import { WalletDTO } from "./dto/WalletDTO";
 
const SERVER_PORT = 3000;
const server = express();
server.use(json())

server.get("", (request: Request, response: Response) => {
    return response.send("O servidor está funcionando");
});

server.get("/users", async (request: Request, response: Response) => {
  const userController = new UserController();
  return response.json(await userController.getUsers());
});

server.post("/users", async (request: Request, response: Response) => {
  const userController = new UserController();
  const newUser = await userController.createUser(new UserDTO(
    null,
    request.body.name,
    request.body.document,
    request.body.email,
    request.body.password
  ));

  return response.status(201).json(newUser);
});

server.get("/currencys", async (request: Request, response: Response) => {
  const currencyController = new CurrencyController();
  return response.json(await currencyController.getCurrencys());
});

server.post("/currency", async (request: Request, response: Response) => {
  const currencyController = new CurrencyController();
  const newCurrency = await currencyController.createCurrency(new CurrencyDTO(
    null,
    request.body.name,
    request.body.acronym,
  ));

  return response.status(201).json(newCurrency);
});

server.get("/wallets", async (request: Request, response: Response) => {
  const walletController = new WalletController();
  return response.json(await walletController.getWallets());
});

server.post("/wallet", async (request: Request, response: Response) => {
  const walletController = new WalletController();
  const newWallet = await walletController.createWallet(new WalletDTO(
    null,
    request.body.name,
    request.body.user,
    request.body.currency
  ));

  return response.status(201).json(newWallet);
});
 
AppDataSource.initialize().then(async () => {
    console.log("database initialized");
 
    server.listen(SERVER_PORT, () => {
        console.log(`servidor escutando na porta ${SERVER_PORT}`);
 
    });
}).catch(error => console.log(error))