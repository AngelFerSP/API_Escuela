import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Estudiantes')
export class Estudiante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellidoPaterno: string;

    @Column()
    apellidoMaterno: string;
}
