import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador } from './entities/jugador.entity';
import { JugadoresService } from './jugadores.service';
import { JugadoresController } from './controllers/jugadores.controller';
import { Equipo } from '../equipos/entities/equipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador, Equipo])],
  controllers: [JugadoresController],
  providers: [JugadoresService],
})
export class JugadoresModule {}

