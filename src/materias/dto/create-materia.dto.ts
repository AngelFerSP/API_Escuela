import { IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateMateriaDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsNumber()
    @IsPositive()
    costo: number;

}
