import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MateriasService {

  constructor(
    @InjectRepository(Materia)
    private materiasRepository: Repository<Materia>,
  ) {}

  async create(createMateriaDto: CreateMateriaDto) {
    
    try {
      const materia = this.materiasRepository.create(createMateriaDto);
      await this.materiasRepository.save(materia);

      return materia;
      
    } catch (error) {
        console.log(error);
    }
  }

  findAll() {
    return this.materiasRepository.find();
  }

  findOne(id: number) {
    return this.materiasRepository.findOneBy({ id });
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  async remove(id: number) {
    const materia = await this.findOne(id);
    console.log('estudiante: ', materia);
    await this.materiasRepository.remove(materia);
  }
}
