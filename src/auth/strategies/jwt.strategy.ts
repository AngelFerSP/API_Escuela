
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Auth } from "../entities/auth.entity";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class JwtStategy extends PassportStrategy( Strategy){

    constructor(
        @InjectRepository(Auth)
        private authRepository: Repository<Auth>,
        configService: ConfigService
    ){
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate( payload: JwtPayload): Promise<Auth>{

        const { nombre } = payload;

        const estudiante = await this.authRepository.findOneBy({ nombre });

        if( !estudiante){
            throw new UnauthorizedException('Token not valid');
        }

        return estudiante;
   
    }

}