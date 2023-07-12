
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Materias')
export class Materia {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    costo: number;
}
