import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';


@Module({
  controllers: [MateriasController],
  providers: [MateriasService],
  imports:[
    TypeOrmModule.forFeature([Materia])
  ]
})
export class MateriasModule {}
