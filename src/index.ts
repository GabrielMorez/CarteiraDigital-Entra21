import "reflect-metadata"
import { AppDataSource } from "./data-source"
import express, { Request, Response, json } from 'express';
import { UserController } from "./controller/UserController";
import { UserDTO } from "./dto/UserDTO";
 
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
 
AppDataSource.initialize().then(async () => {
    console.log("database initialized");
 
    server.listen(3000, () => {
        console.log("servidor escutando na porta 3000");
 
    });
}).catch(error => console.log(error))