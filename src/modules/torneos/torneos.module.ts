import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneo } from './entities/torneo.entity';
import { TorneosService } from './torneos.service';
import { TorneosController } from '../torneos/controllers/torneos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  controllers: [TorneosController],
  providers: [TorneosService],
})
export class TorneosModule {}

