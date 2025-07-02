import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';
import { PartidosService } from './partidos.service';
import { PartidosController } from '../partidos/controllers/partidos.controller';
import { Equipo } from '../equipos/entities/equipo.entity';
import { Torneo } from '../torneos/entities/torneo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partido, Equipo, Torneo])],
  controllers: [PartidosController],
  providers: [PartidosService],
})
export class PartidosModule {}

