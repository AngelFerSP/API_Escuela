import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {

  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepository.create(createEstudianteDto);
      await this.estudianteRepository.save(estudiante);

      return estudiante;
      
    } catch (error) {
        console.log(error);
    }
  }

  findAll() {
    return this.estudianteRepository.find();
  }

  findOne(id: number) {
    return this.estudianteRepository.findOneBy({ id });
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    console.log('estudiante: ', estudiante);
    await this.estudianteRepository.remove(estudiante);
  }
}
