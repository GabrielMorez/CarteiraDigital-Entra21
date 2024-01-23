import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Wallet } from "./Wallet";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Wallet)
    @JoinColumn()
    wallet: Wallet;

    @Column({
        type: "numeric"
    })
    amount: number

    @Column({
        type: "numeric"
    })
    amountBRL: number

    @Column()
    isCredit: boolean

    @Column()
    createdAt: Date
}

