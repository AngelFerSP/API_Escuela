import { IsString, MinLength } from "class-validator";

export class CreateEstudianteDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellidoPaterno: string;

    @IsString()
    @MinLength(1)
    apellidoMaterno: string;
}
