import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string; 
}

