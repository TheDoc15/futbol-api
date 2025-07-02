import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Equipo } from '../equipos/entities/equipo.entity';
import { Torneo } from '../torneos/entities/torneo.entity';

@Injectable()
export class PartidosService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidoRepo: Repository<Partido>,

    @InjectRepository(Equipo)
    private readonly equipoRepo: Repository<Equipo>,

    @InjectRepository(Torneo)
    private readonly torneoRepo: Repository<Torneo>,
  ) {}

  async create(dto: CreatePartidoDto) {
    const local = await this.equipoRepo.findOneBy({ id: dto.localId });
    const visitante = await this.equipoRepo.findOneBy({ id: dto.visitanteId });
    const torneo = await this.torneoRepo.findOneBy({ id: dto.torneoId });

    if (!local || !visitante || !torneo) {
      throw new NotFoundException('Equipo o torneo no encontrado');
    }

    const partido = this.partidoRepo.create({
      fecha: dto.fecha,
      resultado: dto.resultado,
      local,
      visitante,
      torneo,
    });

    return this.partidoRepo.save(partido);
  }

  findAll() {
    return this.partidoRepo.find({
      relations: ['local', 'visitante', 'torneo'],
    });
  }

  async findOne(id: number) {
    const partido = await this.partidoRepo.findOne({
      where: { id },
      relations: ['local', 'visitante', 'torneo'],
    });

    if (!partido) {
      throw new NotFoundException('Partido no encontrado');
    }

    return partido;
  }

  async update(id: number, dto: UpdatePartidoDto) {
    const partido = await this.findOne(id);

    if (dto.localId) {
      const local = await this.equipoRepo.findOneBy({ id: dto.localId });
      if (!local) throw new NotFoundException('Equipo local no encontrado');
      partido.local = local;
    }

    if (dto.visitanteId) {
      const visitante = await this.equipoRepo.findOneBy({ id: dto.visitanteId });
      if (!visitante) throw new NotFoundException('Equipo visitante no encontrado');
      partido.visitante = visitante;
    }

    if (dto.torneoId) {
      const torneo = await this.torneoRepo.findOneBy({ id: dto.torneoId });
      if (!torneo) throw new NotFoundException('Torneo no encontrado');
      partido.torneo = torneo;
    }

    this.partidoRepo.merge(partido, dto);
    return this.partidoRepo.save(partido);
  }

  async remove(id: number) {
    const partido = await this.findOne(id);
    return this.partidoRepo.remove(partido);
  }
}
