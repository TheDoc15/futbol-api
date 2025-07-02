import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepo: Repository<Equipo>,
  ) {}

  async create(dto: CreateEquipoDto) {
    const equipo = this.equipoRepo.create(dto);
    return await this.equipoRepo.save(equipo);
  }

  findAll() {
    return this.equipoRepo.find({ relations: ['jugadores'] });
  }

  async findOne(id: number) {
    const equipo = await this.equipoRepo.findOne({ where: { id }, relations: ['jugadores'] });
    if (!equipo) {
      throw new NotFoundException('Equipo no encontrado');
    }
    return equipo;
  }

  async update(id: number, dto: UpdateEquipoDto) {
    const equipo = await this.findOne(id);
    this.equipoRepo.merge(equipo, dto);
    return this.equipoRepo.save(equipo);
  }

  async remove(id: number) {
    const equipo = await this.findOne(id);
    return this.equipoRepo.remove(equipo);
  }
}


