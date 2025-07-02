import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneo } from './entities/torneo.entity';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { UpdateTorneoDto } from './dto/update-torneo.dto';

@Injectable()
export class TorneosService {
  constructor(
    @InjectRepository(Torneo)
    private readonly torneoRepo: Repository<Torneo>,
  ) {}

  async create(dto: CreateTorneoDto) {
    const torneo = this.torneoRepo.create(dto);
    return await this.torneoRepo.save(torneo);
  }

  findAll() {
    return this.torneoRepo.find({ relations: ['partidos'] });
  }

  async findOne(id: number) {
    const torneo = await this.torneoRepo.findOne({ where: { id }, relations: ['partidos'] });
    if (!torneo) {
      throw new NotFoundException('Torneo no encontrado');
    }
    return torneo;
  }

  async update(id: number, dto: UpdateTorneoDto) {
    const torneo = await this.findOne(id);
    this.torneoRepo.merge(torneo, dto);
    return this.torneoRepo.save(torneo);
  }

  async remove(id: number) {
    const torneo = await this.findOne(id);
    return this.torneoRepo.remove(torneo);
  }
}
