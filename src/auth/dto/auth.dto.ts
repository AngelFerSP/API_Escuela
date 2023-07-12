import { IsNotEmpty } from "class-validator";

export class AuthDto {

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    apellidoPaterno: string;

}
