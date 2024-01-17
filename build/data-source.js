"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./model/User");
var Wallet_1 = require("./model/Wallet");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Senac@2021",
    database: "CarteiraDigital",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Wallet_1.Wallet],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map