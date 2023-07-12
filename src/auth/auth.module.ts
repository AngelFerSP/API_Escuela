import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Auth } from './entities/auth.entity';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ApiKeyStategy } from './strategies/apikey.strategy';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStategy, ApiKeyStategy],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({ 
      imports: [ ConfigModule],
      inject: [ ConfigService],
      useFactory: ( configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '2h'
          }
        }
      }
     }),
    TypeOrmModule.forFeature([Auth])
  ],
  
  exports: [ JwtStategy, PassportModule, JwtModule ]
})
export class AuthModule {}
