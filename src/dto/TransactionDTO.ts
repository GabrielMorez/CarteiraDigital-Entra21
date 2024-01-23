import { Transaction } from "../model/Transaction";
import { Wallet } from "../model/Wallet";

export class TransactionDTO {
    
    constructor(
        public id: number,
        public wallet: Wallet,
    ) {}

    static fromModel(transaction: Transaction): TransactionDTO {

        const transactionDTO = new TransactionDTO(
            transaction.id,
            transaction.wallet,
        );

        return transactionDTO;
    }

    toModel(): Transaction {

        let newTransaction = new Transaction();
        newTransaction.wallet = this.wallet;

        return newTransaction;
    }
}