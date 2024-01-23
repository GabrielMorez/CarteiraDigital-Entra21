import { AppDataSource } from "../data-source";
import { TransactionDTO } from "../dto/TransactionDTO";
import { Transaction } from "../model/Transaction";

export class BalanceController {
    constructor() {

    }

    async getTransactions() {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        const transactionsList = await transactionRepository.find({relations:{
            wallet: true
        }});
        return transactionsList.map((transaction: Transaction) => TransactionDTO.fromModel(transaction));
    }

    async createTransaction(transactionDTO: TransactionDTO) {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        const newTransaction = transactionDTO.toModel();
        const savedTransaction = await transactionRepository.save(newTransaction);
        return TransactionDTO.fromModel(savedTransaction);
    }

    async updateTransaction(transactionDTO: TransactionDTO) {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        const newTransaction = transactionDTO.toModel();
        const savedTransaction = await transactionRepository.save(newTransaction);
        return TransactionDTO.fromModel(savedTransaction);
    }
}