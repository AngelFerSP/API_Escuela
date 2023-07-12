import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {

  constructor(
    
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    private readonly jwtService: JwtService
  ) {}

  async login(authDto: AuthDto) {
    const { nombre, apellidoPaterno } = authDto;
    return this.authRepository.findOneBy({ nombre, apellidoPaterno });
  }

  private getJwtToken( payload: JwtPayload) {
    const token = this.jwtService.sign( payload );
    return token;
  }

}
