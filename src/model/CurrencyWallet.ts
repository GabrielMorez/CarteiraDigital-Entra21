import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Wallet } from "./Wallet";
import { Currency } from "./Currency";

@Entity()
export class CurrencyWallet {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Wallet, (wallet) => wallet)
    wallet: Wallet[];

    @ManyToOne(() => Currency, (currency) => currency)
    currency: Currency[];

    @Column({
        type: "numeric"
    })
    value: number
}

