import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Wallet {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

