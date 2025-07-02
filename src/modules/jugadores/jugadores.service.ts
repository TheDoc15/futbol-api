import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jugador } from './entities/jugador.entity';
import { CreateJugadorDto } from './dto/create-jugador.dto';
import { UpdateJugadorDto } from './dto/update-jugador.dto';
import { Equipo } from '../equipos/entities/equipo.entity';

@Injectable()
export class JugadoresService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepo: Repository<Jugador>,

    @InjectRepository(Equipo)
    private readonly equipoRepo: Repository<Equipo>,
  ) {}

  async create(dto: CreateJugadorDto) {
    const equipo = await this.equipoRepo.findOneBy({ id: dto.equipoId });
    if (!equipo) throw new NotFoundException('Equipo no encontrado');
    const jugador = this.jugadorRepo.create({ ...dto, equipo });
    return this.jugadorRepo.save(jugador);
  }

  findAll() {
    return this.jugadorRepo.find({ relations: ['equipo'] });
  }

  async findOne(id: number) {
    const jugador = await this.jugadorRepo.findOne({ where: { id }, relations: ['equipo'] });
    if (!jugador) throw new NotFoundException('Jugador no encontrado');
    return jugador;
  }

  async update(id: number, dto: UpdateJugadorDto) {
    const jugador = await this.findOne(id);
    if (dto.equipoId) {
      const equipo = await this.equipoRepo.findOneBy({ id: dto.equipoId });
      if (!equipo) throw new NotFoundException('Equipo no encontrado');
      jugador.equipo = equipo;
    }
    this.jugadorRepo.merge(jugador, dto);
    return this.jugadorRepo.save(jugador);
  }

  async remove(id: number) {
    const jugador = await this.findOne(id);
    return this.jugadorRepo.remove(jugador);
  }
}

