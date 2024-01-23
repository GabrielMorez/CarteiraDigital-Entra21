import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./model/User"
import { Wallet } from "./model/Wallet"
import { Currency } from "./model/Currency"
import { Transaction } from "./model/Transaction"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Senac@2021",
    database: "CarteiraDigital",
    synchronize: true,
    logging: false,
    entities: [User, Wallet, Currency, Transaction],
    migrations: [],
    subscribers: [],
})
