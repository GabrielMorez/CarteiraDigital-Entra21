import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Wallet } from "./Wallet";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "numeric"
    })
    document: number;

    @Column()
    email: string;

    @Column()
    password: string; 

    @ManyToOne(() => Wallet, (wallet) => wallet)
    wallets: Wallet[];
}

