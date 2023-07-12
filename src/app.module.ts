import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MateriasModule } from './materias/materias.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './materias/entities/materia.entity';
import { Estudiante } from './estudiantes/entities/estudiante.entity';
import { Auth } from './auth/entities/auth.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'prueba',
      password: 'prueba',
      database: 'digitalpro',
      entities: [Materia, Estudiante, Auth],
      synchronize: true,
      options: { encrypt: false }
    }),
    AuthModule,
    MateriasModule,
    EstudiantesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
